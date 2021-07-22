import styles from '../../../css/components/DashTabs.module.css'
import { useState } from 'react'
import React from 'react'

const DashTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const handleTabClick = (e, newActiveTab) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.tabs}>
          {children.map((tab) => {
            const tabName = tab.props.label
            const close = tab.props.close

            return (
              <>
                <li
                  key={tabName}
                  className={tabName === activeTab ? styles.current : ''}
                >
                  <a href="#" onClick={(e) => handleTabClick(e, tabName)}>
                    {tabName}
                  </a>
                  {tab.props.close}
                </li>
              </>
            )
          })}
        </ul>
        {/* <div className={styles.content}>{children}</div> */}
        <div className={styles.content}>
          {children.map((content) => {
            const tabName = content.props.label

            if (tabName === activeTab)
              return <div key={tabName}>{content.props.children}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default DashTabs
