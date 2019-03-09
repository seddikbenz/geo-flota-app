import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text,
  Spinner
} from 'gestalt'
const Home = () => {
  return (
    <Box flex='grow'>
      <Spinner show={true} accessibilityLabel="Example spinner" />
    </Box>
  )
}

export default withRouter(observer(Home))