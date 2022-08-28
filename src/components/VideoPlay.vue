<script setup>
    const props = defineProps(["video"]);
</script>

<template>
    <div>
        <video controls :src=" video.url "></video>
        <div>Debug: Play {{ video }}</div>
    </div>
</template>
