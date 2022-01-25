import { useState } from 'react';

const FaqTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className='flex flex-row w-full'>
      <ul className='w-1/4 h-3/4 bg-gray-100 m-0 min-w-max list-none text-xl'>
        {children.map((tab) => {
          const tabName = tab.props.label;

          return (
            <li
              key={tabName}
              // className={tabName === activeTab ? styles.current : ''}
              className={`
              ${
                tabName === activeTab
                  ? 'text-green-600 font-bold'
                  : ''
              }
              px-12 py-10`}
            >
              <button onClick={(e) => handleTabClick(e, tabName)}>
                {tabName}
              </button>
            </li>
          );
        })}
      </ul>
      {/* <div className={styles.content}>{children}</div> */}
      <div className='m-2 text-left w-3/4 h-3/4'>
        {children.map((content) => {
          const tabName = content.props.label;

          if (tabName === activeTab)
            return <div key={tabName}>{content.props.children}</div>;
        })}
      </div>
    </div>
  );
};

export default FaqTabs;
