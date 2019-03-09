import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text
} from 'gestalt'
const Profile = () => {
  return (
    <Box flex='grow' color={'red'}>
      <Text>Proszszszssssssssfile</Text>
    </Box>
  )
}

export default withRouter(observer(Profile))