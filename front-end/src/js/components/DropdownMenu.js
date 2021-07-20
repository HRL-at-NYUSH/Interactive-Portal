import { useState } from 'react'

function DropdownMenu({ selected, setSelected, label, options }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="dropdown-menu">
      <p>{label}</p>
      <div
        className="dropdown-btn-menu"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content-menu">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              className="dropdown-item-menu"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
