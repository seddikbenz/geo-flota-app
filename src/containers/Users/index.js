import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text
} from 'gestalt'
const Users = () => {
  return (
    <Box height={500} color={'gray'}>
      <Text>Users</Text>
    </Box>
  )
}

export default withRouter(observer(Users))