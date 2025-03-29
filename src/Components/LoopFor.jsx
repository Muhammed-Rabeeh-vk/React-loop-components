import React from "react";
import { validateData } from "./validateData";

const LoopFor = ({ data, renderItem, filter, sort, limit }) => {
  try {
    validateData(data, renderItem, sort, filter, limit, "LoopFor");

    let processedData = [...data];

    if (sort) processedData.sort(sort);
    if (filter) processedData = processedData.filter(filter);
    if (limit) processedData = processedData.slice(0, limit);

    let elements = [];
    for (let i = 0; i < processedData.length; i++) {
      elements.push(renderItem(processedData[i], i));
    }

    return <>{elements}</>;
  } catch (error) {
    console.error(`[LoopFor] Error:`, error);
    return (
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ Error: Invalid props in <strong>LoopFor</strong>. Details:{" "}
        {error.message}
      </p>
    );
  }
};

export default LoopFor;
