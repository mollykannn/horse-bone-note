<script setup>
import { ref, computed } from 'vue';
import NP from 'number-precision';
const totalCount = ref(0);
const achieveCount = 25;
const process = computed(() => achieveCount > totalCount.value ? NP.times((NP.divide(totalCount.value, achieveCount)), 100) : 100);
const addCount = () => totalCount.value += 1;
</script>
<template>
  <div class="countColumn">
    <button class="countButton" v-on:click="addCount()">試一下連按吧</button>
    <div class="lineBreak"></div>
    <span>目前進度: {{ process }} %</span>
    <div class="processBar"
      :style="{ 'background': 'linear-gradient(90deg, rgba(24, 160, 88, 1) 0%, rgba(24, 160, 88, 1) ' + process + '%, rgba(240, 240, 240, 1) ' + process + '%)' }">
    </div>
  </div>
  <div></div>
</template>
<style scoped>
.lineBreak {
  margin-top: 1rem;
}
.countColumn {
  margin: 1em 0;
  display: inline-block;
  width: 100%;
}
.countButton {
  background-color: #18a058;
  padding: .5em 7em;
  border-radius: .3em;
  color: #fff;
}
.processBar {
  margin-top: .5em;
  width: 100%;
  height: 1.5em;
  border-radius: .2rem;
  transition: background-color 0.5s ease;
}
</style>