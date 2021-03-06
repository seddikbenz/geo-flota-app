import axios from 'axios'
import commonStore from './stores/commonStore';


//const API_ROOT = 'https://geo-flota-server.herokuapp.com/api/';
const API_ROOT = 'http://localhost:8000/api/';

let requests = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Authorization': `Bearer ${commonStore.token}`
  }
});

const Auth = {
  login: (email, password) => requests.post('/auth/login', { email, password } ),
  me: () => requests.get('/auth/me'),
  getUser: (id) => requests.get('/auth/users/' + id),
  all: () => requests.get('/auth/users'),
  create: (user) => requests.post('/auth/users', { ...user }),
  delete: (id) => requests.delete('/auth/users/' + id),
  update: (user) => requests.put('/auth/users/' + user.id, { ...user })
};

const Company = {
  getCompany: (id) => requests.get('/companies/' + id),
  all: () => requests.get('/companies'),
  create: (name, logo) => requests.post('/companies', { name, logo } ),
  delete: (id) => requests.delete('/companies/' + id),
  update: (company) => requests.put('/companies/' + company.id, { ...company })
};

const Car = {
  getCar: (id) => requests.get('/cars/' + id),
  all: () => requests.get('/cars'),
  create: (car) => requests.post('/cars', { ...car} ),
  delete: (id) => requests.delete('/cars/' + id),
  update: (car) => requests.put('/cars/' + car.id, { ...car })
};

export default {
  Auth,
  Company,
  Car
};
