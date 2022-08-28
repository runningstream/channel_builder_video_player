<script setup>
    import { ref } from "vue";

    import VideoList from "./VideoList.vue";
    import VideoPlay from "./VideoPlay.vue";

    const video_list = ref([
        {"title": "Uno", "url": "https://uno"},
        {"title": "Dos", "url": "https://dos"},
        {"title": "BBB", "url": "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"},
    ]);

    const video_selected = ref("");

    function select_video( video ) {
        video_selected.value = video;
    }
</script>

<template>
    <VideoList :videoList="video_list" @videoSelected="select_video" />
    <VideoPlay v-model:video="video_selected" />
    <div>Debug: Sel</div>
</template>
