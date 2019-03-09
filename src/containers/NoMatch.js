import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text
} from 'gestalt'
const NoMatch = () => {
  return (
    <Box height='100%' width={'100%'} color={'red'}>
      <Text>404 Not found</Text>
    </Box>
  )
}

export default withRouter(observer(NoMatch))