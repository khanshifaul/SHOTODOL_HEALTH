<template>
    <section id="contact" class="container mx-auto py-4">
        <h3 class="border-b font-Broadway-bt text-3xl pb-2">Contact us</h3>
        <div class="grid md:grid-cols-2 justify-between mx-auto py-4">
            <div class="text-xl">
                <h4 class="text-3xl font-bold font-Bornomala">শতদল কমিউনিটি হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার</h4>
                <p class="font-Bornomala">কানছগাড়ী, (শেরপুর রোড, গণপূর্ত ভবনের পার্শ্বে), বগুড়া সদর - ৫৮২৬, বগুড়া।</p>
                <p class="flex items-center space-x-2">
                    <Icon icon="mdi:deskphone" /><span> +88 01818 458526</span>
                </p>
                <p class="flex items-center space-x-2">
                    <Icon icon="mdi:cellphone-basic" /><span> +88 01985 765721</span>
                </p>
                <p class="flex items-center space-x-2">
                    <Icon icon="mdi:email" /><span> info@shotodol.health</span>
                </p>
                <div class="flex space-x-2 text-2xl py-2">
                    <NuxtLink to="https://facebook.com/">
                        <Icon icon="mdi:facebook" />
                    </NuxtLink>
                    <NuxtLink to="https://twitter.com/">
                        <Icon icon="mdi:twitter" />
                    </NuxtLink>
                    <NuxtLink to="https://linkedin.com/">
                        <Icon icon="mdi:linkedin" />
                    </NuxtLink>
                </div>
            </div>
            <div class="grid mx-auto w-[100%]">
                <div class="form-floating py-1">
                    <input type="text" id="floatingName" class="form-input px-4 py-3 rounded w-full" aria-required="true"
                        placeholder="John Doe" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <input type="email" class="form-input px-4 py-3 rounded w-full" aria-required="true"
                        placeholder="name@example.com" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <input id="floatingSubject" class="form-input px-4 py-3 rounded w-full" aria-required="true"
                        placeholder="Subject" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <textarea id="floatingTextarea" class="form-textarea px-4 py-3 rounded w-full" aria-required="true"
                        placeholder="Leave your message here" style="height: 150px"></textarea>
                    <span class="text-danger"></span>
                </div>
                <div class="py-1 flex">
                    <button @click="" id="message-submit" type="submit"
                        class="font-bold p-2 rounded w-fit justify-end bg-primary text-white">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>