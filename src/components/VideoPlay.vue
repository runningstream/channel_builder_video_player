<script setup lang="ts">
    import { VideoType } from "../api_js/serverAPI";

    const props = defineProps<{
        video: VideoType,
    }>();

    function play_video(_ev: Event) : void {
        if( event != null && event.target != null ) {
            (event.target as HTMLVideoElement).play();
        }
    }
</script>

<template>
    <div>
        <video controls :src="video.videourl" @canplaythrough="play_video"></video>
    </div>
</template>

<style scoped>
    video {
        width: 100%;
        margin-top: 1em;
    }
</style>
