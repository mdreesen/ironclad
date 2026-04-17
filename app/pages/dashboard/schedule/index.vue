<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

const scheduled = [
    {id: 123456, name: "frank", time: '01:30pm', date: '02/02/2026', phone: '4066072405', email: 'mdreesen90@gmail.com'},
    {id: 123457, name: "Billy", time: '01:30pm', date: '02/05/2026', phone: '4066072405', email: 'mdreesen90@gmail.com'},
    {id: 123458, name: "Tank", time: '01:30pm', date: '02/09/2026', phone: '4066072405', email: 'mdreesen90@gmail.com'},
    {id: 123459, name: "Lile", time: '01:30pm', date: '02/01/2026', phone: '4066072405', email: 'mdreesen90@gmail.com'},
    {id: 123451, name: "Jessica", time: '01:30pm', date: '02/26/2026', phone: '4066072405', email: 'mdreesen90@gmail.com'}

]
</script>

<template>
    <appHero label="Schedule" />

    <main class="flex flex-col gap-16">
        <section>
        <baseCalendar />
    </section>

    <section>
        <baseHeaderSection label="SCHEDULED FOR TODAY" />
        <div class="flex flex-wrap justify-center gap-5">
        <div v-for="item in scheduled">
            <baseCardSchedule :label="item.name" description="Scheduled today" :phone_number="item.phone" :email="item.email" :date="item.date" :time="item.time" />
        </div>
    </div>
    </section>
    </main>
</template>