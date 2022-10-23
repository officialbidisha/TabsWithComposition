import { useState } from "react";
import "./App.css";
import  Tab  from "./components/Tab";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleChange = (newIndex) => {
      setCurrentIndex(newIndex);
  }
  return (
    <div className="App">
      <Tab currentTab={currentIndex} onChange={handleChange}>
        <Tab.TabList>
          <Tab.TabItem label="Tab 1" index={1}></Tab.TabItem>
          <Tab.TabItem label="Tab 2" index={2}></Tab.TabItem>
        </Tab.TabList>
        <Tab.TabPanels>
          <Tab.TabPanel index={1}>Panel 1</Tab.TabPanel>
          <Tab.TabPanel index={2}>Panel 2</Tab.TabPanel>
        </Tab.TabPanels>
      </Tab>
    </div>
  );
}

export default App;
