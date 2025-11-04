import React, { useState } from "react";
import Accordian from "./accordian";
import Tabs from "./tabs";

const accordianItems = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JS library for building UIs.",
  },
  {
    id: 2,
    title: "What is a Hook?",
    content: "Hooks are functions to manage state and lifecycle.",
  },
  {
    id: 3,
    title: "3rd Item?",
    content: "Hooks are functions to manage state and lifecycle.",
  },
];
const tabItems = [
  { label: "Home", content: "Welcome to the Home tab" },
  { label: "Profile", content: "This is your Profile" },
  { label: "Settings", content: "Adjust your preferences here" },
];

const AccordianTabs = () => {
  const [openedAccordianId, setOpenedAccordianId] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="container">
      <h1>Accordian and Tabs</h1>
      <Accordian
        items={accordianItems}
        openedAccordianId={openedAccordianId}
        setOpenedAccordianId={setOpenedAccordianId}
      />
      <Tabs items={tabItems} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </div>
  );
};

export default AccordianTabs;
