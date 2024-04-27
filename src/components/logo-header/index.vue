<template>
    <div id="logo-header" :class="{'position':menu}">
        <div class="container">
            <div class="logo-header-wrapper">
                <div class="logo">
                    <img src="../../assets/icons/logoo 1.svg" alt="logo">
                </div>
                <div class="search">
                    <input type="text" placeholder="Пошук">
                    <img src="../../assets/icons/search.svg">
                </div>
                <div class="contact">
                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                    <div class="tel">
                        <a class="number" href="tel">+38 (067) 115 00 58</a>
                        <a  class="telegram" href="#">Telegram orqali bog`lanish</a>
                    </div>

                </div>
                <div class="toggle" v-if="!menu" @click="OpenMenu()">
                    <img src="../../assets/icons/menu.svg" alt="menu icon">
                </div>
                <div class="toggle" v-if="menu" @click="OpenMenu()">
                    <img src="../../assets/icons/close.svg" alt="menu icon">
                </div>
            </div>
        </div>
        <Menu @click="OpenMenu()" :class="{ 'menu': !menu }"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Menu from '../header/menu.vue'
let menu = ref(false)
const OpenMenu = () => {
    menu.value = !menu.value
}
</script>