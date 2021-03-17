import React, { useState} from 'react';
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../graphql/queries'
import { CharactersDisplay } from '../components/Characters/CharactersDisplay';
import HeaderImg from '../static/rick-morty-logo.png'
import RickMortyLoading from '../static/rick-and-morty-loading.gif'
import ReactDOM from 'react-dom'

// IMG BELONGS TO LOUIS G SIMON (https://dribbble.com/Louis_G_SIMON) //

import './styles.scss';

export function RickMortyCharContainer (){
  // this is where we'll map out the characters
  const { data } = useQuery(GET_CHARACTERS)

  function renderCharacters () {
    if (!data){
      return <div style={{background: 'white'}}><img className="loading" src={RickMortyLoading} /></div>
    } else if (data){
      return data.characters.results.map((character) => 
        <CharactersDisplay key={character.id} character={character}/>)
    }
  }
  
  
  return (
    <div className="head">  
      <div className="head-nav">
        <a href="/"><img className="head-nav-img" src={HeaderImg}/></a>
      </div>
      <div className="header">
      </div>
      <div className="mapped-character-divs">
        {renderCharacters()}
      </div>
    </div>
  )
}