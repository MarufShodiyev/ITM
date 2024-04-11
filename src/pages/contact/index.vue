<template>
    <Header />
    <div class="contact-page">
        <LogoHeader />
        <div class="container">
            <div class="contact-page-wrapper">
                <p>Головна <span>. Контакти</span></p>
                <h2>Контакти</h2>
                <div class="contact-contend">
                    <div class="contact-contend-top">
                        <ul>
                            <li>
                                <img src="../../assets/icons/map.svg" alt="map icon">
                                <p>Україна, Вінницька область,
                                    Вінниця, Хмельницьке шосе, 122
                                </p>
                            </li>
                            <li>
                                <img src="../../assets/icons/clock.svg" alt="clock icon">
                                <div>
                                    <h4>Пн-Пт</h4>
                                    <p>
                                        9.00-18.00
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="../../assets/icons/sms.svg" alt="sms icon">

                                <p>
                                    shop@ukrsemena.com
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-contend-bottom">
                        <h3>
                            Відділ продажу та агрономічного супроводу
                        </h3>
                        <p>
                            Якщо Вам потрібна допомога при оформленні замовлення, консультація по використанню товарів,
                            є питання що до Ваших замовлень звертайтеся сюди:
                        </p>
                        <ul>
                            <li>
                                <img src="../../assets/icons/clock.svg" alt="clock icon">
                                <div>
                                    <h4>Пн-Пт</h4>
                                    <p>
                                        9.00-18.00
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="../../assets/icons/tel.svg" alt="map icon">
                                <div>
                                    <p>(050) 42-42-820</p>
                                    <p>(050) 42-42-824</p>
                                </div>
                            </li>
                           
                            <li>
                                <img src="../../assets/icons/tel.svg" alt="map icon">
                                <div>
                                    <p>(050) 42-42-820</p>
                                    <p>(050) 42-42-824</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="map-img">
                    <img src="../../assets/icons/maps.svg" alt="map img">
                </div>
            </div>
        </div>

    </div>
    <Footer />
</template>
<script setup>
import Header from '../../components/header/header.vue';
import LogoHeader from '../../components/logo-header/index.vue'
import Footer from '../../components/footer/index.vue'
</script>