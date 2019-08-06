import VueRouter from 'vue-router';

// VIEWS
import Dashboard from '@/views/Dashboard';
import ProjectList from '@/views/project/List';

// ROUTES
const routes = [{
    path: '/',
    name: 'Root',
    component: ProjectList,
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }];

export default new VueRouter({routes});
