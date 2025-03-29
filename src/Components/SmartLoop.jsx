import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window"; // ✅ Virtualized List
import useSmartData from "./Hooks/useSmartData";

const SmartLoop = React.memo(({ data, renderItem, height, itemSize, itemCount, ...options }) => {
  const { processedData, loading, error, retryCount } = useSmartData(data, options);

  const renderRow = useCallback(({ index, style }) => {
    const item = processedData[index];
    return <div style={style}>{renderItem(item, index)}</div>;
  }, [processedData, renderItem]);

  if (loading) return <p>Loading data... ⏳</p>;
  if (retryCount > 0) return <p>Retrying... (Attempt {retryCount + 1} of 3) 🔄</p>;
  if (error) return <p style={{ color: "red", fontWeight: "bold" }}>⚠️ Error: {error}</p>;
  if (!processedData.length) return <p>No data available. 📭</p>;

  return (
    <List height={height} itemSize={itemSize} itemCount={processedData.length || itemCount} width="100%">
      {renderRow}
    </List>
  );
});

SmartLoop.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  renderItem: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired, // ✅ Virtualized List Height
  itemSize: PropTypes.number.isRequired, // ✅ Row Size
  itemCount: PropTypes.number, // ✅ Number of items
};

SmartLoop.defaultProps = {
  itemCount: 50, // Default item count for large lists
};

export default SmartLoop;
