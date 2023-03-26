<template>
    <section class="mx-auto">
        <div class="carousel-container">
            <div class="slide-container">
                <div class="slide" :style="{ transform: `translateX(-${slideIndex * 100}%)` }">
                    <div class="slide-item" v-for="(slide, index) in slides" :key="index">
                        <div class="bg-local bg-cover h-full"
                            :style="{ backgroundImage: `url(${slide.image})`, height: slideHeight }">
                            <div class="p-12 font-bold">
                                <h2 :class="`${slide.titleClass}`">{{ slide.title }}</h2>
                                <p>{{ slide.text }}</p>
                                <button v-if="slide.buttonText" class="bg-green-500 rounded p-2 text-xl">{{ slide.buttonText
                                }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slide-buttons flex justify-between">
                <Icon icon="mdi:chevron-left" class="prev-slide-button text-2xl" @click="prevSlide" />
                <Icon icon="mdi:chevron-right" class="next-slide-button text-2xl" @click="nextSlide" />
            </div>
            <div class="slide-pagination">
                <span v-for="(slide, index) in slides" :key="index" :class="{ active: slideIndex === index }"
                    class="pagination-item" @click="slideIndex = index"></span>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { Icon } from '@iconify/vue';
const slides = [
    {
        image: 'https://images.unsplash.com/photo-1651186857332-5dbda6b94dda',
        alt: 'Slide 1',
        title: 'Experience healthcare excellence at our state-of-the-art facility',
        titleClass: 'leading-loose md:text-7xl text-white',
        text: '',
        text_class: 'text-white',
        buttonText: 'Book Appointment'
    },
    {
        image: 'https://ik.imagekit.io/khanshifaul/banner_LeqrW9vWm.jpg?updatedAt=1679778218793',
        alt: 'Slide 2',
    },
    {
        image: 'https://images.unsplash.com/photo-1603807008857-ad66b70431aa',
        alt: 'Slide 3',
        title: 'Experience healthcare excellence at our state-of-the-art facility',
        titleClass: 'leading-loose md:text-7xl',
        text: '',
        text_class: '',
        buttonText: 'Book Appointment'
    },
    {
        image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0',
        alt: 'Slide 4',
        title: 'Experience healthcare excellence at our state-of-the-art facility',
        titleClass: 'leading-loose md:text-7xl text-white',
        text: '',
        text_class: 'text-white',
        buttonText: 'Book Appointment'
    },
]
const slideIndex = ref(0)
const slideHeight = '600px'

const nextSlide = () => {
    slideIndex.value = slideIndex.value === slides.length - 1 ? 0 : slideIndex.value + 1
}
const prevSlide = () => {
    slideIndex.value = slideIndex.value === 0 ? slides.length - 1 : slideIndex.value - 1
}

setInterval(() => {
    slideIndex.value = slideIndex.value === slides.length - 1 ? 0 : slideIndex.value + 1
}, 15000)

</script>
  
<style scoped>
.carousel-container {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slide-container {
    width: 100%;
    overflow: hidden;
}

.slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide-item {
    flex-shrink: 0;
    width: 100%;
}

.slide-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.slide-buttons {
    position: absolute;
    top: calc(50% - 15px);
    width: 100%;
}

.prev-slide-button,
.next-slide-button {
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 100%;
}

.prev-slide-button:hover,
.next-slide-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
}

.slide-pagination {
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
}

.pagination-item {
    display: inline-block;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.pagination-item:hover,
.pagination-item.active {
    color: #fff;
    background-color: #4caf50;
}
</style>