<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header-menu">
        <ul>
            <li v-for="(value, index) in navs" :key="index">
                <a :href="value.path">{{ value.text }}</a>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { reactive } from 'vue';

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