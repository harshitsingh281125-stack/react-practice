import React from "react";
import "./styles.css";

const Tabs = ({ items, selectedTab, setSelectedTab }) => {
  return (
    <div>
      <div className="tab-header">
        {items.map((it, index) => (
          <div
            className={`tab-label ${selectedTab === index ? "active" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            <span>{it.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content-wrapper">
        <p key={selectedTab} className="tab-content fade">
          {items[selectedTab].content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
