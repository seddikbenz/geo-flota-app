import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'
import {observer} from 'mobx-react'
import {
  Box,
  Button,
  Spinner
} from 'gestalt'

// components
import Header from './Header'

// containers
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Maps from '../containers/Maps'
import Reports from '../containers/Reports'
import Notifications from '../containers/Notifications'
import Companies from '../containers/Companies'
import Users from '../containers/Users'
import Cars from '../containers/Cars'
import Trackers from '../containers/Trackers'
import NoMatch from '../containers/NoMatch'
import Login from '../containers/Login'

import store from '../stores'

class App extends React.Component{
  componentWillMount() {
    store.userStore.me();
  }

  render() {
    if (store.userStore.loadingUser) {
      return (
        <Box
          flex='grow'
          color='lightWash'
          display="flex"
          justifyContent='center'
          alignItems="center"
          direction="column"
        >
          <Spinner
            show={true}
            accessibilityLabel='Loading application'
          />
        </Box>
      );
    }
    if (store.userStore.currentUser.username === '') {
      return (
        <Box
          flex='grow'
          color='lightWash'
          alignItems="center"
          justifyContent='center'
          direction="column"
          display="flex"
        >
          <Login />
        </Box>
      )
    }
    return(
      <BrowserRouter>
        <Box flex='grow' color='lightWash' direction="column" display="flex">
          <Header />

          <Box width='100%' flex='grow' marginTop={3} display='flex' direction="column" >
            <Switch>
              <Route path={'/'} component={Home} exact />
              <Route path={'/me'} component={Profile} exact />
              <Route path={'/maps'} component={Maps} />
              <Route path={'/reports'} component={Reports} />
              <Route path={'/notifications'} component={Notifications} />
              <Route path={'/companies'} component={Companies} />
              <Route path={'/users'} component={Users} />
              <Route path={'/cars'} component={Cars} />
              <Route path={'/trackers'} component={Trackers} />
              <Route component={NoMatch} />
            </Switch>
          </Box>
        </Box>
      </BrowserRouter>
    )
  }
}

export default observer(App);
