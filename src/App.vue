<script setup>
import q from "./data/quizes.json";
import {ref,watch} from "vue";
import Card from "./components/Card.vue";

const quizes =ref(q);
const search = ref("");

// working as listner
watch(search,()=>{
  quizes.value = q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLowerCase()))
});

</script>
<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model="search" type="text" placeholder="Search...">
    </header>
    <div class="option-container">

      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>
.container{
  max-width: 1000px;
  margin: 0 auto;
}
header h1{
  font-weight: bold;
  margin-right: 30px;
}
.option-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
}
header input{
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
}

</style>