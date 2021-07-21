import React, { useState } from 'react'
import ToggleSwitch from './ToggleSwitch'

function Toggle() {
  let [isToggleOn, setToggle] = useState(false)
<<<<<<< HEAD
=======
  let [display, setDisplay] = useState(false)
>>>>>>> 4023f3c87e1859fcc2734cefc6c1fc2f1ee026ee

  const onChange = (checked) => {
    setToggle(checked)
  }

  return (
    <div>
      <div>
        <ToggleSwitch id="switch" checked={isToggleOn} onChange={onChange} />
      </div>

      <div>
        {display ? <p>Toggle: {isToggleOn ? 'select' : 'query'}</p> : ''}
      </div>
    </div>
  )
}

export default Toggle
