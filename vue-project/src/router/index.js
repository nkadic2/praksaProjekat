import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import RegistrationView from "@/views/RegistrationView.vue"
import MovieDetailsView from "@/views/MovieDetailsView.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/login",
      name: "Loginview",
      component: LoginView,
      //component: () => import("@/views/LoginView.vue")
    },
    {
      path: "/registration",
      name: "RegistrationView",
      component: RegistrationView,
      //component: () => import("@/views/RegistrationView.vue")
    },
    {
      path: "/details/:id",
      name: "MovieDetailsView",
      component: MovieDetailsView,
      //component: () => import("@/views/RegistrationView.vue")
    }
  ]
})

export default router
