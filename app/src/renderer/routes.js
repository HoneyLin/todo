export default [
    {
        path: '/',
        name: 'home-page',
        component: require('components/HomePage')
    },  {
        path: '/task-control',
        name: 'task-page',
        component: require('components/TaskPage')
    }, {
        path: '/test',
        name: 'test-page',
        component: require('components/TestPage.vue')
    }, {
        path: '*',
        redirect: '/'
    }
]
