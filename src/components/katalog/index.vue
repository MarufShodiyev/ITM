<template>
    <div class="katolog">
        <div class="container">
            <div class="katolog-wrapper">
                <h2>Katalog</h2>
                <div class="slide">
                    <div class="btn" @click="moveBack">
                        <img src="../../assets/icons/back.svg" alt="back img botton">
                    </div>
                    <div class="cards">
                        <div class="card" v-for="(item ,index) in visibleCards" :key="index">
                            <div class="img">
                               
                                <img :src="item.img" alt="card img">
                            </div>
                            <div class="content">
                                
                                <h4>{{ item.name }}</h4>
                                
                                <p>{{ item.availability }}</p>
                                <div class="order-call">
                                    <div>                                       
                                        <h4>{{ item.price }} грн</h4>                                        
                                        <span>{{item.quantity }}</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <!-- <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <img src="../../assets/icons/card-img1.svg" alt="card img 1">
                            </div>
                            <div class="content">
                                <h4>Петунія Софістика F1</h4>
                                <p>В наявності</p>
                                <div class="order-call">
                                    <div>
                                        <h4>20 грн</h4>
                                        <span>1 шт</span>
                                    </div>
                                    <img src="../../assets/icons/tel.svg" alt="tel icon">
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="btn" @click="moveNext">
                        <img src="../../assets/icons/next.svg" alt="next img botton">
                    </div>
                </div>
                <div class="all-btn">
                    <button>Дивитися усі товари</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref, computed, reactive ,watch,onMounted} from 'vue';
import carimg1 from '../../assets/icons/card-img1.svg'
import carimg2 from '../../assets/icons/card-img2.svg'
import carimg3 from '../../assets/icons/card-img3.svg'
import carimg4 from '../../assets/icons/card-img4.svg'
const STORAGE_KEY = 'carouselIndex';

const cards = ref([
    {
        img:carimg1,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg2,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg3,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg4,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg2,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg3,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg4,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg2,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg3,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg4,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg3,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg4,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    {
        img:carimg2,
        name: 'Петунія Софістика F1',
        availability: 'В наявності',
        price: 20,
        quantity: '1 шт'
    },
    //   // Add more card objects here
]);


const currentIndex = ref(parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0);


const visibleCards = computed(() => {
    return cards.value.slice(currentIndex.value, currentIndex.value + 4);
});

const moveNext = () => {
    if (currentIndex.value < cards.value.length - 4) {
        currentIndex.value += 1;
        console.log("if next ga kirdi");
    }
};

const moveBack = () => {
    if (currentIndex.value > 0) {
        currentIndex.value -= 1;
        console.log("if back ga kirdi");

    }
};
watch(currentIndex, (newValue) => {
  localStorage.setItem(STORAGE_KEY, newValue);
});
onMounted(() => {
  if (currentIndex.value >= cards.value.length - 3 && cards.value.length > 3) {
    currentIndex.value = cards.value.length - 3;
  }
});
</script>