import { useMemo, useState, useEffect } from "react";

const useSmartData = (data, options = {}, maxRetries = 3) => {
  const [asyncData, setAsyncData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Retry Fetch Logic with Exponential Backoff
  const fetchDataWithRetry = async (attempt = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await data();
      if (!Array.isArray(response)) {
        throw new Error("Invalid response: Data function must return an array.");
      }
      setAsyncData(response);
    } catch (err) {
      console.error(`[useSmartData] Fetch Attempt ${attempt} Failed:`, err);
      if (attempt < maxRetries) {
        setTimeout(() => fetchDataWithRetry(attempt + 1), Math.pow(2, attempt) * 100);
        setRetryCount(attempt);
      } else {
        setError("Failed to load data after multiple attempts.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Data Input (Array or Async Function)
  useEffect(() => {
    if (!Array.isArray(data) && typeof data !== "function") {
      setError("Invalid data: Expected an array or function.");
      return;
    }
    if (typeof data === "function") {
      fetchDataWithRetry();
    } else {
      setAsyncData(data);
    }
  }, [data]);

  // Process Data
  const processedData = useMemo(() => {
    if (error) return [];

    try {
      let result = [...asyncData];
      const { filter, sort, limit, reverse, mapTransform, groupBy, uniqueBy, slice, shuffle, page, pageSize } = options;

      if (filter) result = result.filter(filter);
      if (sort) result.sort(sort);
      if (reverse) result.reverse();
      if (shuffle) result.sort(() => Math.random() - 0.5);
      if (mapTransform) result = result.map(mapTransform);

      // Grouping
      if (groupBy) {
        const grouped = {};
        result.forEach(item => {
          if (!item.hasOwnProperty(groupBy)) throw new Error(`groupBy Error: Key "${groupBy}" not found.`);
          const key = item[groupBy];
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(item);
        });
        result = Object.keys(grouped).map(key => ({ [groupBy]: key, items: grouped[key] }));
      }

      // Uniqueness
      if (uniqueBy) {
        const seen = new Set();
        result = result.filter(item => {
          if (!item.hasOwnProperty(uniqueBy)) throw new Error(`uniqueBy Error: Key "${uniqueBy}" not found.`);
          const key = item[uniqueBy];
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }

      // Pagination
      if (slice) result = result.slice(slice[0], slice[1]);
      if (page && pageSize) result = result.slice((page - 1) * pageSize, page * pageSize);
      if (limit) result = result.slice(0, limit);

      return result;
    } catch (err) {
      console.error("[useSmartData] Processing Error:", err);
      setError(err.message);
      return [];
    }
  }, [asyncData, options]);

  return { processedData, loading, error, retryCount };
};

export default useSmartData;
