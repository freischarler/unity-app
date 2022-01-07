import Home from '@/modules/unity/views/Home.vue'
import About from '@/modules/unity/views/About.vue'
import Contact from '@/modules/unity/views/Contact.vue'
import Careers from '@/modules/unity/views/Careers.vue'
import Programs from '@/modules/unity/views/Programs.vue'
import Class from '@/modules/unity/views/Class.vue'
import Instructors from '@/modules/unity/views/Instructors.vue'

export default {
  name: 'unity',
  component: () => import( /* webpackChunkName: "Schedule" */'@/modules/unity/layout/UnityLayout.vue'),  //Lazyload page
  children: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component:About
    },
    {
      path: '/careers',
      name: 'Careers',
      component:Careers
    },
    {
      path: '/programs',
      name: 'Programs',
      component:Programs
    },
    {
      path: '/programs/:id',
      name: 'Class',
      component:Class
    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import( /* webpackChunkName: "Schedule" */'@/modules/unity/views/Schedule.vue')  //Lazyload page
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component:Instructors
    },
  ]
  }