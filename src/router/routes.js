// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

const Todo = () => import('../views/todo/todo.vue')

const Login = () => import('../views/login/login.vue')

export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: Todo,
    name: 'todo',
    meta: {
      title: 'this is todo',
      description: 'todo页面'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]
