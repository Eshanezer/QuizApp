<script setup>

const {questionStatus,barPresentage} = defineProps(['questionStatus',"barPresentage"])
</script>
<template>
    <header>
        <h4>Question {{ questionStatus }}</h4>
        <div class="bar">
            <div class="completion" :style="{width:barPresentage}">

            </div>
        </div>
       </header>
</template>
<style scoped>

.bar{
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}
.completion{
    height: 100%;
    width: 0%;
    background-color: bisque;
}
</style>