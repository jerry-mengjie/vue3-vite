<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="increment">count is: {{ counter }}</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia' // 类似toRefs
import { useAboutStore } from '@/store/modules/about'

const { counter } = storeToRefs(useAboutStore())
const { increment } = useAboutStore()
</script>
