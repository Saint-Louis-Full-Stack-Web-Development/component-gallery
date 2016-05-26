import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter()

// Components
import App from './App.vue'

import Mapper from './components/Mapper/mapper.vue'
import ToDos from './components/Todos/ToDoApp.vue'
import Punchlist from './components/Punchlist/punchlist.vue'


// Redirects
router.redirect({
    '*': 'punchlist'
})

// Mappings
router.map({
    '/mapper': {
        component: Mapper
    },
    '/todos': {
        component: ToDos
    },
    '/punchlist': {
        component: Punchlist
    }
})

router.start(App, '#app')
