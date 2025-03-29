import React from "react";
import { validateData } from "./validateData";

const LoopReduce = ({ data, renderItem, filter, sort, limit, reverse, mapTransform, groupBy, uniqueBy, slice, shuffle }) => {
  try {
   validateData(data, renderItem, sort, filter, limit, reverse, mapTransform, groupBy, uniqueBy, slice, shuffle, "LoopForEach");
       
           let processedData = [...data];
       
           // Apply operations in the correct order
           if (filter) processedData = processedData.filter(filter);
           if (sort) processedData.sort(sort);
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
             processedData = Object.keys(grouped).map(key => ({ [groupBy]: key, items: grouped[key] }));
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
       
           if (limit) processedData = processedData.slice(0, limit);
       
    return (
      <>
        {processedData.reduce((acc, item, index) => {
          acc.push(renderItem(item, index));
          return acc;
        }, [])}
      </>
    );
  } catch (error) {
    console.error(`[LoopReduce] Error:`, error);
    return (
      <p style={{ color: "red", fontWeight: "bold" }}>
        ⚠️ Error: Invalid props in <strong>LoopReduce</strong>. Details:{" "}
        {error.message}
      </p>
    );
  }
};

export default LoopReduce;
