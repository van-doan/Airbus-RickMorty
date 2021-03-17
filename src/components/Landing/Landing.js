import React from 'react';
import './styles.scss'

export function Landing(){

  return(
    <main className="landing">
      <div className="landing-container">
        <h3 className="landing-container-subtitle">
          project
        </h3>
        <h1 className="landing-container-title">
          RICK &amp; MORTY
        </h1>
        <h2 className="landing-container-title-desc">
          an Airbus challenge
        </h2>
        <p className="landing-container-intro">
        Wireframed with <span className="figma">Figma</span> | Programmed with a <span className="react">React</span> | Data retrieved with <span className="gql">GraphQL</span>
        </p>
        <button className="landing-btn"><a href="/picklerick">Let's Get Schwifty</a></button>
      </div>
      <div className="landing-image-container">
        <div className="landing-image">
        </div>
      </div>
    </main>
  )
}