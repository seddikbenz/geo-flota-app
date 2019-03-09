import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Box,
  Text
} from 'gestalt'
const Cars = () => {
  return (
    <Box height={500} color={'gray'}>
      <Text>Cars</Text>
    </Box>
  )
}

export default withRouter(observer(Cars))