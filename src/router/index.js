import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Deposit from '../views/Deposit'
import Withdraw from '../views/Withdraw'
import Dashboard from '../views/Dashboard'
import Balance from '../views/Balance'
import Guard from '../services/middleware'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    beforeEnter: Guard.auth,
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    beforeEnter: Guard.auth,
    path: '/balance',
    name: 'Balance',
    component: Balance,
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit,
    beforeEnter: Guard.auth,
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw,
    beforeEnter: Guard.auth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
