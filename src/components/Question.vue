<script setup>
import { defineEmits } from 'vue';
const {question} = defineProps(['question'])

const emit = defineEmits(['selectOption'])
const emitSelectedOption =(isCorrect)=>{
    emit("selectOption",isCorrect)
}
</script>
<template>
    <div class="question-container">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </div>
        <div class="options-container">
            <div class="option" v-for="option in question.options" 
            :key="option.id"
            @click="emitSelectedOption">
                <p class="option-lable">{{ option.lable }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
</template>