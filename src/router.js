import { createRouter, createWebHistory } from 'vue-router';
import TasksView from './views/TasksView.vue'
import NewView from './views/NewView.vue'
import TaskView from './views/TaskView.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: TasksView },
        { path: '/new', component: NewView },
        { path: '/task/:id', component: TaskView },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});
