<script setup>
    import VideoListEntry from "./VideoListEntry.vue";

    const params = defineProps(["channelList"]);
    const emit = defineEmits(["videoSelected"]);
</script>

<template>
    <div class="video_list">
        <VideoListEntry class="video_list_entry"
            v-for="entry in channelList" :entry="entry"
            @videoSelected="$emit('videoSelected', $event)"
        />
    </div>
</template>

<style scoped>
    .video_list .video_list_entry:nth-child(odd) {
        background: var(--color-teal);
    }
    .video_list .video_list_entry:nth-child(even) {
        background: var(--color-ltolive);
    }
</style>
