<template>
    <section>
        <div class="bg-red-300 grid grid-flow-col md:grid-cols-7 md:justify-around items-center uppercase font-semibold h-48 overflow-x-auto">
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:calendar" class="text-5xl" />
                <span> Book Appointment</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:call-centre" class="text-5xl" />
                <span> Consult Online</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:medicines" class="text-5xl" />
                <span> Buy Medicine</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:blood-pressure-monitor" class="text-5xl" />
                <span> Book Health Check</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:biochemistry-laboratory" class="text-5xl" />
                <span> Book Lab Test</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:clinical-f" class="text-5xl" />
                <span> View Health Record</span>
            </NuxtLink>
            <NuxtLink to="/#" class="grid justify-items-center text-center w-36 md:w-auto">
                <Icon icon="healthicons:health-literacy" class="text-5xl" />
                <span> Health And Wellness</span>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>