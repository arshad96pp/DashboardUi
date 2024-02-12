import React from 'react'
import { profileCard } from '../constance/profileCard';
import { tagData } from '../constance/InrerestTag';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


function PopupCard(idData,closeHandelre) {

    const profilData=profileCard.find((item)=>item.id===idData.idData)


  

  return (
    <div className='popup'>
      <div className="closePopup"  >
        {/* <span ><CloseRoundedIcon /></span> */}
      </div>
        <div className='popup-bg' style={{backgroundImage:`url(${profilData?.image})`}}></div>
        <div className="popup-contant">
            <h1>{profilData?.name}</h1>

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
            pariatur nesciunt consequuntur praesentium perspiciatis facere
          </p>

          <h1>Interests</h1>

          <div className="tags-profile" >
            {tagData.map((item, index) => (
              <li key={index}><img src={item.icon} alt="" />{item.tags}</li>
            ))}
          </div>

        </div>
    </div>
  )
}

export default PopupCard