<template>
    <div id="header">
        <div class="container">
            <div class="header-wrapper">
                <ul>
                    <li v-for="(value, index) in navs" :key="index">
                        <router-link :to="value.path">{{ value.text }}</router-link>
                    </li>
                </ul>
                
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
let navs = reactive([
    {
        text: "O нас",
        path:"/"
    },
    {
        text: "Каталог",
        path:"/katalog"
    },
    {
        text: "Контакти",
        path:"/contact"
    }
])
</script>