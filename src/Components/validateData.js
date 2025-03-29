export const validateData = (
  data,
  renderItem,
  sort,
  filter,
  limit,
  reverse,
  mapTransform,
  groupBy,
  uniqueBy,
  slice,
  shuffle,
  componentName
) => {
  if (!Array.isArray(data)) {
    throw new Error(`[${componentName}] Expected 'data' to be an array.`);
  }

  if (typeof renderItem !== "function") {
    throw new Error(
      `[${componentName}] Expected 'renderItem' to be a function.`
    );
  }

  if (data.length === 0) {
    console.warn(`[${componentName}] Warning: The 'data' array is empty.`);
  }

  if (sort && typeof sort !== "function") {
    throw new Error(`[${componentName}] 'sort' should be a function.`);
  }

  if (filter && typeof filter !== "function") {
    throw new Error(`[${componentName}] 'filter' should be a function.`);
  }

  if (limit && (typeof limit !== "number" || limit <= 0)) {
    throw new Error(`[${componentName}] 'limit' should be a positive number.`);
  }

  if (mapTransform && typeof mapTransform !== "function") {
    throw new Error(`[${componentName}] 'mapTransform' should be a function.`);
  }

  if (groupBy && typeof groupBy !== "string") {
    throw new Error(
      `[${componentName}] 'groupBy' should be a string (key name).`
    );
  }

  if (uniqueBy && typeof uniqueBy !== "string") {
    throw new Error(
      `[${componentName}] 'uniqueBy' should be a string (key name).`
    );
  }

  if (
    slice &&
    (!Array.isArray(slice) ||
      slice.length !== 2 ||
      slice.some((n) => typeof n !== "number"))
  ) {
    throw new Error(
      `[${componentName}] 'slice' should be an array with two numbers [start, end].`
    );
  }
};
