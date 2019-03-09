import React from "react";
import {observer} from "mobx-react/index";
import {withRouter} from "react-router-dom";
import {
  Box,
  SearchField,
  IconButton,
  Flyout,
  Button,
  Text,
  Sticky
} from "gestalt";

import store from '../stores'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      openProfile: false
    };
    this.handleClickMenu = this._handleClickMenu.bind(this);
    this.handleDismissMenu = this._handleDismissMenu.bind(this);
    this.anchorMenuRef = React.createRef();

    this.handleClickProfile = this._handleClickProfile.bind(this);
    this.handleDismissProfile = this._handleDismissProfile.bind(this);
    this.anchorProfileRef = React.createRef();
  }
  _handleClickMenu() {
    this.setState(() => ({ openMenu: !this.state.open }));
  }
  _handleDismissMenu() {
    this.setState(() => ({ openMenu: false }));
  }
  _handleClickProfile() {
    this.setState(() => ({ openProfile: !this.state.open }));
  }
  _handleDismissProfile() {
    this.setState(() => ({ openProfile: false }));
  }
  render(){
    const {history} = this.props
    return (
      <Sticky top={0} >
        <Box
          display="flex"
          padding={1}
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent={'center'}
          color="white"
        >
          <Box padding={1} display="flex" direction="row"
               alignItems="center"
               justifyContent={'center'}
          >
            <Box paddingX={2}>
              <Button
                size="sm"
                color="white"
                text="Home"
                onClick={() => history.push('/')}
              />
            </Box>
            <Box paddingX={2}>
              <IconButton
                accessibilityLabel="Maps"
                icon="location"
                size="md"
                onClick={() => history.push('/maps')}
              />
            </Box>
            <Box paddingX={2}>
              <IconButton
                accessibilityLabel="Reports"
                icon="compose"
                size="md"
                onClick={() => history.push('/reports')}
              />
            </Box>
            <Box paddingX={2} ref={this.anchorMenuRef} >
              <IconButton
                accessibilityLabel="Menu"
                icon="apps"
                size="md"
                accessibilityHaspopup
                accessibilityExpanded={this.state.open}
                onClick={this.handleClickMenu}
              />
            </Box>
            {
              this.state.openMenu &&
              <Flyout
                anchor={this.anchorMenuRef.current}
                idealDirection="down"
                onDismiss={this.handleDismissMenu}
                size="sm"
              >
                <Box
                  padding={2}
                  display={'flex'}
                  direction={'column'}
                  width={'100%'}
                >
                  <Box marginTop={3}>
                    <Button
                      size="sm"
                      color="white"
                      text="Company settings"
                      onClick={() => {history.push('/companies'); this._handleDismissMenu()}}
                    />
                  </Box>
                  <Box marginTop={3}>
                    <Button
                      size="sm"
                      color="white"
                      text="User settings"
                      onClick={() => {history.push('/users'); this._handleDismissMenu()}}
                    />
                  </Box>

                  <Box marginTop={3}>
                    <Button
                      size="sm"
                      color="white"
                      text="Car settings"
                      onClick={() => {history.push('/cars'); this._handleDismissMenu()}}
                    />
                  </Box>

                  <Box marginTop={3}>
                    <Button
                      size="sm"
                      color="white"
                      text="Tracker settings"
                      onClick={() => {history.push('/trackers'); this._handleDismissMenu()}}
                    />
                  </Box>

                </Box>
              </Flyout>
            }
          </Box>

          <Box paddingX={2}>
            <SearchField
              accessibilityLabel="Search ..."
              id="searchField"
              placeholder="Search ..."
              value={store.commonStore.textSearch}
              onChange={({value}) => store.commonStore.textSearch = value}
            />
          </Box>

          <Box flex="grow" />

          <Box paddingX={2}>
            <IconButton
              accessibilityLabel="Notifications"
              icon="bell"
              size="md"
              onClick={() => history.push('/notifications')}
            />
          </Box>

          <Box paddingX={2} ref={this.anchorProfileRef}>
            <IconButton
              accessibilityLabel="Profile"
              icon="person"
              size="md"
              onClick={this.handleClickProfile}
            />
          </Box>
          {
            this.state.openProfile &&
            <Flyout
              anchor={this.anchorProfileRef.current}
              idealDirection="down"
              onDismiss={this.handleDismissProfile}
              size="sm"
            >
              <Box
                padding={2}
                display={'flex'}
                direction={'column'}
                width={'100%'}
              >
                <Box marginTop={3}>
                  <Button
                    size="sm"
                    color="white"
                    text={store.userStore.currentUser.username}
                    onClick={() => {history.push('/me');this.handleDismissProfile()}}
                  />
                </Box>
                <Box marginTop={3}>
                  <Button
                    size="sm"
                    color="white"
                    text="Logout"
                    onClick={store.authStore.logout}
                  />
                </Box>
              </Box>
            </Flyout>
          }
        </Box>
      </Sticky>
    )
  }
}

export default withRouter(observer(Header))
