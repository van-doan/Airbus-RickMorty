import React, { useState } from 'react';
import {FaChild, 
  FaHeart, 
  FaHeartBroken, 
  FaSearchLocation,  
  FaUserCog} from 'react-icons/fa';
import {IoPlanetSharp} from 'react-icons/io5';
import './styles.scss'

export function CharactersDisplay({ character }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);
  const [rotate, setRotate] = useState(false);
  const toggleCharacterInfo = () => {
    if(!active){
      setShow(true)
      setActive(true)
      setRotate(true)
    } else {
      setShow(false)
      setActive(false)
      setRotate(true)
    }
  }

  return(
    <div className={`characters ${active ? 'characters-origin' : ''}`}>
      <div className="characters-module">
      <div className="characters-module-container"> 
      {show && 
        <h2 className="characters-module-container-name">{character.name}</h2>
      }
        <div className="characters-module-container-image" style={{backgroundImage: `url(${character.image})`}}>
        <button className="characters-btn" onClick={toggleCharacterInfo}>
          {show ? '' : null}
        </button>
        </div>
      </div>
        { active && 
        <div className={`characters-module-container-info ${active ? 'active' : null}`}>
          <span className="gender" ><FaChild className="gender-icon" style={{color: character.gender === 'Male' ? '#3ABBB3': 'grey' || character.gender === 'Female' ? '#DE6DC7' : 'grey' || character.gender === 'unknown' ? 'grey' : 'grey'}}/>  – {character.gender}</span>
          <span className="species"><FaUserCog className="species-icon"/> – {character.species}</span>
          <span className="status">{character.status === 'Alive' ? <FaHeart className="alive" /> : <FaHeartBroken className="dead" />} – {character.status}</span>
          <span className="location"><FaSearchLocation className="location-icon"/> – {character.location.name}</span>
          <span className="origin"><IoPlanetSharp className="origin-icon"/> – {character.origin.name}</span>
        </div>
        }
      </div>
    </div>
  )
}