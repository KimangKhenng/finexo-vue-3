import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Team from "@/pages/Team/Team.vue"
import TeamComponent from "@/components/Team.vue"
import TeamMember from "@/pages/Team/TeamMember.vue"
import Services from "@/components/Services.vue"
import Course from "@/pages/courses/index.vue"
import CoursePage from '@/pages/courses/CoursePage.vue'
import Login from "@/pages/login.vue"
import Repository from '@/pages/Repository.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    {
        path: '/team', component: Team, children: [
            { path: ':id', component: TeamMember },
            { path: '', component: TeamComponent },
            { path: 'service', component: Services }
        ]
    },
    { path: '/courses', component: Course },
    { path: '/courses/:id', component: CoursePage },
    { path: '/login', component: Login },
    { path: '/repos', component: Repository },
    { path: '/register', component: Register },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router