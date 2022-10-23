import { useState } from "react";
import "./App.css";
import { Tab, TabItem, TabList, TabPanel, TabPanels } from "./components/Tab";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handleChange = (newIndex) => {
      setCurrentIndex(newIndex);
  }
  return (
    <div className="App">
      <Tab currentTab={currentIndex} onChange={handleChange}>
        <TabList>
          <TabItem label="Tab 1" index={1}></TabItem>
          <TabItem label="Tab 2" index={2}></TabItem>
        </TabList>
        <TabPanels>
          <TabPanel index={1}>Panel 1</TabPanel>
          <TabPanel index={2}>Panel 2</TabPanel>
        </TabPanels>
      </Tab>
    </div>
  );
}

export default App;
