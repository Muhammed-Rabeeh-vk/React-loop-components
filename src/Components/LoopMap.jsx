import React from "react";
import { validateData } from "./validateData";

const LoopMap = ({ data, renderItem, filter, sort, limit, reverse, mapTransform, groupBy, uniqueBy, slice, shuffle }) => {
  try {
    validateData(data, renderItem, sort, filter, limit, reverse, mapTransform, groupBy, uniqueBy, slice, shuffle, "LoopMap");

    let processedData = [...data];

    if (sort) processedData.sort(sort);
    if (filter) processedData = processedData.filter(filter);
    if (limit) processedData = processedData.slice(0, limit);
    if (reverse) processedData.reverse();
    if (shuffle) processedData.sort(() => Math.random() - 0.5);
    if (mapTransform) processedData = processedData.map(mapTransform);
    
    if (groupBy) {
      const grouped = {};
      processedData.forEach(item => {
        const key = item[groupBy];
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item);
      });
      processedData = Object.values(grouped);
    }

    if (uniqueBy) {
      const seen = new Set();
      processedData = processedData.filter(item => {
        const key = item[uniqueBy];
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    if (slice) {
      processedData = processedData.slice(slice[0], slice[1]);
    }

    return <>{processedData.map((item, index) => renderItem(item, index))}</>;
  } catch (error) {
    console.error(`[LoopMap] Error:`, error);
    return (
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ Error: Invalid props in <strong>LoopMap</strong>. Details:{" "}
        {error.message}
      </p>
    );
  }
};

export default LoopMap;
