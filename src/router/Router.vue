<script>

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VehicleList from '../views/UserList.vue'

const routes = [
{ path: '/', component: Home },
  {path:'/User, component: UserList'},
{ path: '/vehicles', component: VehicleList }
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,
})

export default router
</script>