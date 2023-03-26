<template>
    <div class="sticky top-0 z-50">
        <nav class="container mx-auto grid grid-flow-col justify-between p-2">
            <button class="md:hidden border px-2 rounded" @click="">Menu</button>
            <ul class="hidden md:flex items-center font-semibold uppercase">
                <li class="ml-6">
                    <NuxtLink :to="{ path: '/' }" class="hover:text-gray-300">Home</NuxtLink>
                </li>
                <li class="ml-6">
                    <NuxtLink :to="{ path: '/', hash: '#about' }" class="hover:text-gray-300">About us</NuxtLink>
                </li>
                <li class="ml-6">
                    <NuxtLink to="/find_a_doctor" class="hover:text-gray-300">Find a Doctor</NuxtLink>
                </li>
                <li class="ml-6">
                    <NuxtLink to="/centres_of_excellence" class="hover:text-gray-300">Centres of Excellence</NuxtLink>
                </li>
                <li class="ml-6">
                    <NuxtLink to="/services" class="hover:text-gray-300">Our Services</NuxtLink>
                </li>
                <li class="ml-6">
                    <NuxtLink :to="{ path: '/', hash: '#contact' }" class="hover:text-gray-300">Contact us</NuxtLink>
                </li>
            </ul>
            <input type="text" class="form-input rounded" aria-required="true" placeholder="Search">
        </nav>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>