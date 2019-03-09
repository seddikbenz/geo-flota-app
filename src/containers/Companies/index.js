import React from 'react'
import {observer} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {
  Container,
  Modal,
  Box,
  Text,
  Spinner,
  Button,
  Pulsar,
  Touchable
} from 'gestalt'
import store from '../../stores'
import Add from './Add'

const Company = ({name, onDelete, onEdit}) => (
  <Box
    display='flex'
    direction='row'
    margin={1}
    color={'white'}
  >
    <Box
      flex='grow'
      justifyContent={'center'}
      alignItems={'center'}
      display={'flex'}
    >
      <Text> {name} </Text>
    </Box>
    <Box
      display='flex'
      direction='row'
    >
      <Box width={90} padding={1}>
        <Button text='Delete'/>
      </Box>
      <Box width={90} padding={1}>
        <Button text='Edit'/>
      </Box>
    </Box>
  </Box>
)

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleAddModal = this._handleToggleAddModal.bind(this);
    this.state = {
      showAddModal: false,
    };
  }

  _handleToggleAddModal() {
    this.setState(prevState => ({ showAddModal: !prevState.showAddModal }));
  }
  componentWillMount() {
    store.companyStore.getAll()
  }

  render() {
    if (store.companyStore.loading) {
      return (
        <Spinner show={true} accessibilityLabel={'loading companies'}/>
      )
    }
    if (store.companyStore.companies.length === 0) {
      return (
        <Box>
          <Text>No Company found</Text>
        </Box>
      )
    }
    return (
      <Container>
        <Box column={6} paddingX={1} marginBottom={2}>
          <Button
            color={'red'}
            text="Add new Company"
            inline
            size={'sm'}
            onClick={this.handleToggleAddModal}
          />
        </Box>
        <Add
          showModal={this.state.showAddModal}
          handleToggleModal={this.handleToggleAddModal}
        />
        <Box>
          <Box
            display='flex'
            direction='row'
            margin={1}
            color={'white'}
          >
            <Box
              flex='grow'
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
            >
              <Text>Name</Text>
            </Box>
            <Box
              display='flex'
              direction='row'
            >
              <Box display={'flex'} justifyContent={'center'} width={90} padding={1}>
                <Text>Action</Text>
              </Box>
              <Box display={'flex'} justifyContent={'center'} width={90} padding={1}>
                <Text>Action</Text>
              </Box>
            </Box>
          </Box>
          {
            store.companyStore.companies.map((company, index) => (
              <Company key={index} name={company.name}/>
            ))
          }
        </Box>
      </Container>
    )
  }
}

export default withRouter(observer(Companies))