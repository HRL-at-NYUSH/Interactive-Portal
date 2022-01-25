import { useState } from 'react'

function GraphMenu({ selected, setSelected, label, options }) {
  const [isShown, setIsActive] = useState(false)
  return (

    <div class="select-none items-center text-center m-auto p-auto w-2/3 relative">
      <p class="mt-2 font-bold">Select a graph</p>
      <div
        class="m-6 h-11 pt-3 px-6 border-b-4 rounded-md cursor-pointer bg-green-100 border-grey-500 hover:border-green-400 text-black outline-none"
        onClick={(e) => setIsActive(!isShown)}
      >
        {selected}
        <span className=""></span>
      </div>

      {isShown && (
          <div class="flex items-center justify-center rounded-ml fixed left-1/4 bottom-1/4 w-1/2 h-1/2 bg-white border-grey-200 border-8">
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

export default GraphMenu
