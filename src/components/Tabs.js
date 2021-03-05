import "../styles/tabs.css";
import React from "react";
import {
  CHEAPEST,
  FASTEST,
  SORTS,
  sortByDuration,
  sortFromMinToMaxPrice
} from "../utils";

export const Tabs = (props) => {
  const { setFiltered } = props;
  const [sortButton, setSortButton] = React.useState("cheapest");
  const [sortBy, setSortBy] = React.useState(SORTS[CHEAPEST]);

  React.useEffect(() => {
    if (sortBy === CHEAPEST) {
      setFiltered((tickets) => [...tickets].sort(sortFromMinToMaxPrice));
    } else if (sortBy === FASTEST) {
      setFiltered((tickets) => [...tickets].sort(sortByDuration));
    }
  }, [sortBy]);

  const handleCheapest = () => {
    setSortBy(CHEAPEST);
    setSortButton("cheapest");
  };
  const handleFastest = () => {
    setSortBy(FASTEST);
    setSortButton("fastest");
  };

  return (
    <div className="tabs">
      <Button
        label="Самый дешевый"
        className={`tabsbutLeft ${
          sortButton === "cheapest" ? "isActiveTabsbutLeft" : null
        }`}
        onClick={handleCheapest}
      />
      <Button
        label="Самый быстрый"
        className={`tabsbutRight ${
          sortButton === "fastest" ? "isActiveTabsbutRight" : null
        }`}
        onClick={handleFastest}
      />
    </div>
  );
};

const Button = ({ onClick, className, label }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};