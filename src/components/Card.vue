<script setup>
import { defineProps } from "vue";
const { quiz } = defineProps(['quiz'])
import {useRouter} from "vue-router"

const router = useRouter();
const navivateToQuiz =()=>{
    router.push(`/quize/${quiz.id}`)
}
</script>

<template>
    <div class="card" @click="navivateToQuiz">
        <img :src="quiz.img" alt="">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgab(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>