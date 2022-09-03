<script setup>
    const props = defineProps(["video"]);
</script>

<template>
    <div>
        <video controls :src=" video.videourl "></video>
    </div>
</template>
