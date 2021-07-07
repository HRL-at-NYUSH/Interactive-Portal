import { useState } from 'react'
import '../../css/components/Dropdown.css'

function Dropdown({ selected, setSelected, label, options }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="dropdown">
      <p>{label}</p>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
