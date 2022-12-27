<script setup lang="ts">
import { storeToRefs } from 'pinia';
import {useCounterSetupStore} from "@/store/counter-setup";


const counterStore = useCounterSetupStore();
const { count, squareCount } = storeToRefs(counterStore);
const { increment, incrementBy } = counterStore;

</script>

<template>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squareCount }}</h4>

    <br>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>


</template>

<style scoped>

</style>