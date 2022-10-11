<script setup lang="ts">
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
    .video_list {
        background: var(--color-teal);
        border: 1px var(--color-ltolive) solid;
        border-radius: 5px;
        padding: 5px;
    }
    .video_list .video_list {
        padding: 5px 2px 5px 10px;
    }
</style>
