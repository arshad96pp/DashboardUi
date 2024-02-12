import React, { useState } from 'react'
import { tagData } from '../constance/InrerestTag'
import { Link } from 'react-router-dom'
import Like from '../style/images/Like.png'
import Liked from '../style/images/Liked.png'
import Send from '../style/images/Send.png'
import I from '../style/images/ic.png'
import PopupCard from './PopupCard'
import { useAppContext } from '../context'
import { createPortal } from 'react-dom'






function ProfileCard({id,image}) {
  const [selected,setSelected]=useState(0)
  const [liked,setLiked]=useState(false)
  const [popupClicked,setPopupClicked]=useState(false)

  const {state,Actions}=useAppContext()

  const {isPopu}=Actions


  const { ipPopupData } = state;


  const handelPopup=()=>{
    isPopu.isPopupOn()
    setPopupClicked(true)
  }

  const closeHandelre=()=>{
    setPopupClicked(false)
  }

  console.log(popupClicked);
    
  return (
    <div className="profile-card" >
          <div 
            className="backGround"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="image-slider-cerclel">
              {[1,2,3,4].map((item,index)=>(
                <div onClick={()=>setSelected(index)} key={index} className={`image-cercle ${selected===index && 'ActivedSlider'}`}></div>
              ))}
            </div>
          </div>

          {/* <Link to={`/profile/${id} `} className="profile-contant"> */}
          <div className="profile-contant" onClick={handelPopup}>
            <div className="name-section">
              <h1>Faheema</h1>
              <div className="profileIcons">
                <span onClick={()=>setLiked((priv)=>!priv)}>
                 {liked?  <img src={Liked}/>:  <img src={Like}/>}
                </span>
                <span>
                  <img src={Send} alt="" />
                </span>
                <span>
                <img src={I} alt="" />

                </span>
              </div>
            </div>

            <span className='kem'>52 Km from you</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde
              pariatur nesciunt consequuntur praesentium perspiciatis facere
            </p>

            <h1>Interests</h1>

            <div className="tags">
              {tagData.map((item, index) => (
                <li key={index}><img src={item.icon} alt="" />{item.tags}</li>
              ))}
            </div>
            </div>

          {/* </Link> */}

          {popupClicked && (
          <PopupCard idData={id} closeHandelre={closeHandelre}/>

          )}

        </div>
  )
}

export default ProfileCard