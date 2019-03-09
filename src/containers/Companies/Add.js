import React from 'react'
import {
  Modal,
  Box,
  Button,
  Column,
  Text,
  TextField,
  Label,
  Divider,
  Switch,
  TextArea
} from 'gestalt'


const Add = ({showModal, handleToggleModal}) => {
  if(showModal){
    return (
      <Modal
        accessibilityCloseLabel="close"
        accessibilityModalLabel="Add new Company"
        heading="Add new Company"
        onDismiss={handleToggleModal}
        footer={
          <Box
            justifyContent="between"
            display="flex"
            direction="row"
            marginLeft={-1}
            marginRight={-1}
          >
            <Box column={6} paddingX={1}>
            </Box>
            <Box column={6} paddingX={1}>
              <Box
                display="flex"
                direction="row"
                justifyContent="end"
                marginLeft={-1}
                marginRight={-1}
              >
                <Box paddingX={1}>
                  <Button text="Cancel" inline onClick={handleToggleModal} />
                </Box>
                <Box paddingX={1}>
                  <Button color="red" inline text="Save" />
                </Box>
              </Box>
            </Box>
          </Box>
        }
        size="md"
      >
        <Box display="flex" direction="row" position="relative">
          <Column span={12}>
            <Box paddingY={2} paddingX={4} display="flex">
              <Column span={4}>
                <Label htmlFor="name">
                  <Text align="left" bold>
                    Name
                  </Text>
                </Label>
              </Column>
              <Column span={8}>
                <TextField id="name" onChange={() => undefined} />
              </Column>
            </Box>
          </Column>
        </Box>
      </Modal>
    )
  }
  return null
}

export default Add