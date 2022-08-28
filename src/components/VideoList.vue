<script setup>
    import VideoListEntry from "./VideoListEntry.vue";

    const params = defineProps(["videoList"]);
    const emit = defineEmits(["videoSelected"]);

    function select_video( video ) {
        console.log(video);

        emit("videoSelected", video);
    }
</script>

<template>
    <VideoListEntry v-for="video in videoList"
        :title = "video.title"
        :url = "video.url"

        @click = "select_video(video)"
    />
    <div>Debug: List</div>
</template>
