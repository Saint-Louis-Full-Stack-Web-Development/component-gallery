import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let router = new VueRouter()

// Components
import App from './App.vue'

import Mapper from './components/Mapper/mapper.vue'
import PlaceMapper from './components/PlaceMapper/map.vue'
import ToDos from './components/Todos/ToDoApp.vue'


router.map({
    '/mapper': {
        component: Mapper
    },
    '/placemapper': {
        component: PlaceMapper
    },
    '/todos': {
        component: ToDos
    }
})

router.start(App, '#app')
