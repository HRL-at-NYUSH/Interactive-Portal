import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'

function Toggle() {
  let [isToggleOn, setToggle] = useState(false)

  const onChange = (checked) => {
    setToggle(checked)
  }

  return (
    <div>
      <div>
        <ToggleSwitch id="switch" checked={isToggleOn} onChange={onChange} />
      </div>

      <div>
        <p>Toggle: {isToggleOn ? 'select' : 'query'}</p>
      </div>
    </div>
  )
}

export default Toggle
