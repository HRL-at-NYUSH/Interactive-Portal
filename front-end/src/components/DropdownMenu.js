import { useState } from 'react'

function DropdownMenu({ selected, setSelected, label, options }) {
  const [isActive, setIsActive] = useState(false)
  return (

    <div class="select-none items-center text-center m-auto p-auto w-2/3 relative">
      <p class="mt-2 font-bold">{label}</p>
      <div
        class="m-6 h-11 pt-3 px-6 border-b-4 rounded-md cursor-pointer bg-green-100 border-grey-500 hover:border-green-400 text-black outline-none"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <span className=""></span>
      </div>

      {isActive && (
        <div class="-mt-6 m-6 py-0 bg-white shadow-xl font-medium text-black">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              class="block px-4 py-3 capitalize text-black hover:bg-green-500 hover:text-white"
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
