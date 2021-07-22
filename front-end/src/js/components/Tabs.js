import { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className='flex flex-row'>
      <ul className='w-96 m-0 min-w-max list-none'>
        {children.map((tab) => {
          const tabName = tab.props.label;

          return (
            <li
              key={tabName}
              // className={tabName === activeTab ? styles.current : ''}
              className={`
              ${
                tabName === activeTab
                  ? 'text-indigo-600 font-bold bg-gray-200'
                  : ''
              }
              px-1.5 py-4`}
            >
              <button onClick={(e) => handleTabClick(e, tabName)}>
                {tabName}
              </button>
            </li>
          );
        })}
      </ul>
      {/* <div className={styles.content}>{children}</div> */}
      <div className='m-2 text-left w-full'>
        {children.map((content) => {
          const tabName = content.props.label;

          if (tabName === activeTab)
            return <div key={tabName}>{content.props.children}</div>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
