import React from 'react'
import '../Popup/Popus.scss'
import { useState } from 'react'
function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <>
      <button onClick={openPopup}>open</button>  

      <Popup 
        isOpen={isPopupOpen} 
        onClose={closePopup}
      >
        <div className="popup">
          <div className="popup__content">  
          </div>
        </div>
      </Popup>
    </>
  );
}

export default Popup
