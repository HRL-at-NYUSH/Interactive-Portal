import { useState } from 'react'

function QuestionTabs({ question, answer }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
    <div className="w-full relative select-none cursor-pointer"
    onClick={(e) => setIsActive(!isActive)}>
      <div className='flex'>
      {isActive ? (
            <p className='text-2xl px-6 py-5'>-</p>
          ) : (
            <p className='text-2xl px-6 py-5'>+</p>
            )}
        <p className="text-xl px-6 py-6">{question}</p>
      </div>

      {isActive && (
        <div className="w-9/10 px-12 pb-4 text-lg">
          {answer}
        </div>
      )}
    </div>
    {/* <div className='w-9/10 mx-6 min-h-1 bg-gray-400'></div> */}
  </>
  )
}

export default QuestionTabs
