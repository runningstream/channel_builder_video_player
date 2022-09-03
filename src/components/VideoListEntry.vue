<script setup>
    const params = defineProps(["video"]);

    const emit = defineEmits(["videoSelected"]);

    function select_video( video ) {
        emit("videoSelected", video);
    }
</script>

<template>
    <div @click="select_video(video)">
        {{ video.name }}
    </div>
</template>

<style scoped>
    div {
        cursor: pointer;
        border: 1px var(--color-ltolive) solid;
        border-radius: 20px;
        padding: 20px;
    }
</style>
