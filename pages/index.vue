<template>
    <header class="border-b">
        <Branding />
        <HelloWorldNavigation  />
    </header>
    <main class="m-2">
        <HelloWorldHeroSlide />
        <HelloWorldHeroCategory />
        <HelloWorldAbout />
        <HelloWorldContact />
    </main>
    <footer>
        <HelloWorldFooter />
    </footer>
</template>

<script setup>
definePageMeta({

})

useHead({
    title: 'শতদল কমিউনিটি হাসপাতাল এন্ড ডায়াগনস্টিক সেন্টার'
})
</script>