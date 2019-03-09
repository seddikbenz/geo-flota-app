import React from 'react'
import {observer} from 'mobx-react'
import {
  Box,
  Text,
  Label,
  TextField,
  Button
} from 'gestalt'

import store from '../stores'

const Login = () => {
  return (
    <Box
      color={'white'}
      display='flex'
      direction='column'
      width={400}
      padding={5}
      shape='rounded'
    >
      <Box marginBottom={2}>
        <Box marginBottom={2}>
          <Label htmlFor="email">
            <Text>Email</Text>
          </Label>
        </Box>
        <TextField
          id="email"
          errorMessage={!store.authStore.values.email ? "This field can't be blank!" : null}
          onChange={({value}) => store.authStore.setEmail(value)}
          placeholder="Email Address"
          value={store.authStore.values.email}
          type="email"
        />
      </Box>
      <Box marginBottom={2}>
        <Box marginBottom={2}>
          <Label htmlFor="password">
            <Text>Password</Text>
          </Label>
        </Box>
        <TextField
          id="password"
          errorMessage={!store.authStore.values.password ? "This field can't be blank!" : null}
          onChange={({value}) => store.authStore.setPassword(value)}
          placeholder="Password"
          value={store.authStore.values.password}
          type="password"
        />
      </Box>
      <Box marginTop={2}>
        <Button
          color="white"
          text="Login"
          onClick={store.authStore.login}
        />
      </Box>
    </Box>
  )
}

export default observer(Login)