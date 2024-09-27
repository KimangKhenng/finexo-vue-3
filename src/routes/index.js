import { createRouter, createWebHistory } from "vue-router"

const Home = () => import("@/pages/Home.vue")
const About = () => import("@/pages/About.vue")
const Team = () => import("@/pages/Team/Team.vue")
const TeamComponent = () => import("@/components/Team.vue")
const TeamMember = () => import("@/pages/Team/TeamMember.vue")
const Services = () => import("@/components/Services.vue")
const Course = () => import("@/pages/courses/index.vue")
const CoursePage = () => import('@/pages/courses/CoursePage.vue')
const Login = () => import("@/pages/login.vue")
const Repository = () => import('@/pages/Repository.vue')
const Register = () => import('@/pages/Register.vue')
const NotFound = () => import('@/components/NotFound.vue')

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