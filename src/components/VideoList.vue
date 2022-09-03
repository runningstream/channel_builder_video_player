<script setup>
    import VideoListEntry from "./VideoListEntry.vue";

    const params = defineProps(["videoList"]);
    const emit = defineEmits(["videoSelected"]);
</script>

<template>
    <div id="video_list">
        <VideoListEntry class="video_list_entry"
            v-for="video in videoList" :video="video"
            @videoSelected="$emit('videoSelected', $event)"
        />
    </div>
</template>

<style scoped>
    #video_list .video_list_entry:nth-child(odd) {
        background: var(--color-teal);
    }
    #video_list .video_list_entry:nth-child(even) {
        background: var(--color-ltolive);
    }
</style>
