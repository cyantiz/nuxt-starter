<script setup lang="ts">
import { NButton, NInput } from 'naive-ui';
defineProps<{}>();
const text = ref("")

const alertText = () => {
    alert(text.value)
}
</script>


<template>
    <div class="text-3xl p-4">hello, there's nothing here yet</div>
    <div class="p-4 w-96 flex flex-col items-start gap-2 test-area">
        <n-input placeholder="test input" v-model:value="text"></n-input>
        <n-button @click="alertText">Submit</n-button> 
    </div>
</template>

<style lang="less" scoped>

</style>