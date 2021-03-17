import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Landing } from '../components/Landing/Landing'
import { RickMortyCharContainer } from '../containers/CharacterContainer'
// Necessary component imports //

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/picklerick" component={RickMortyCharContainer}/>
    </Switch>
  )
}

export default Routes;