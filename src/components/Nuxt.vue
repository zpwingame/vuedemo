<template>
    <section class="container">
        <div>
            <input class='bn-add' type='button' @click="increment" :value = 'stars'>
            <h1 class="title">
                nuxt-pro || {{ stars }}
            </h1>
            <h2 class="subtitle">
                Nuxt.js project
            </h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { mapState } from 'vuex'
const store = new Vuex.Store({
    state: {
        count: 0,
        stars: 0
    },
    mutations: {
        addStars(state) {
            state.stars++;
        }
    }
})

export default {
    store,
    data() {
        return {
        }
    },
    computed:mapState([
        'stars'
    ]),
    methods: {
        increment() {
            this.$store.commit('addStars')
        }
    },
    mounted() {
        this.$store.commit('addStars')
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
