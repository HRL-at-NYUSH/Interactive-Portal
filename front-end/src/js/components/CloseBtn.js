import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import '../../css/components/CloseBtn.css'

function CloseBtn({ variable }) {
  const [buttonShow, setbuttonShow] = useState(true)
  function disable_button() {
    setbuttonShow(!buttonShow)
  }

  return (
    <div className="App">
      {buttonShow && (
        <div
          id="button_div"
          style={{
            margin: 'auto',
            marginTop: '30px',
            height: '50px',
            width: '200px',
            backgroundColor: 'gray',
          }}
          className="btn btn-danger"
          onClick={(event) => {
            if (event.target.id === 'button_div') {
              if (window.confirm('Delete the item?')) {
                let removeToCollection = this.removeToCollection.bind(this, 121)
                removeToCollection()
              }
            }
          }}
        >
          {variable}
          <div className="content" id="close_button">
            <p
              style={{ width: '20px' }}
              onClick={() => {
                disable_button()
              }}
            >
              X
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CloseBtn
