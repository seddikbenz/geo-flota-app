import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text
} from 'gestalt'
const Trackers = () => {
  return (
    <Box height={500} color={'gray'}>
      <Text>Trackers</Text>
    </Box>
  )
}

export default withRouter(observer(Trackers))