import { createContext, useContext } from "react";
import "./Tab.css";
const TabContext = createContext();

const Tab = (props) => {
  const { currentTab, onChange, children } = props;
  return (
    <div className="tab">
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

 Tab.TabList = function TabList ({ children })  {
  return <div className="tab-list">{children}</div>;
};

Tab.TabItem = function TabItem ({ label, index })  {
  const ctx = useContext(TabContext);
  const { currentTab, onChange } = ctx;
  const clickHandler = () => {
    onChange(index);
  };
  return (
    <div
      className={`tab-item ${currentTab == index ? "active" : ""}`}
      id={index}
      onClick={clickHandler}
    >
      {label}
    </div>
  );
};

Tab.TabPanels = function TabPanels ({ children })  {
  return <div className="tab-panels">{children}</div>;
};

Tab.TabPanel = function TabPanel({ children, index })  {
  const  ctx  = useContext(TabContext);
  let { currentTab } = ctx;
  return (
    currentTab === index && (
      <div id={index} className="tab-panel">
        {children}
      </div>
    )
  );
};

export default Tab;
