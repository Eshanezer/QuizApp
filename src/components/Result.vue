<script setup>
    import {defineProps} from "vue"
    import {RouterLink} from "vue-router"
    const {numberOfCorrectAnswers,quizQuestionLength} = defineProps(["numberOfCorrectAnswers","quizQuestionLength"])
    
</script>
<template>
    <div class="results">
        <p>Your Result .....</p>
        <h1>{{numberOfCorrectAnswers}}/{{ quizQuestionLength }}</h1>
    
        <RouterLink to="/">Go Back</RouterLink>
        </div>
</template>

