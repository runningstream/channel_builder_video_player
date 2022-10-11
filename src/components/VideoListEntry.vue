<script setup lang="ts">
    import VideoList from "./VideoList.vue";

    import type { VideoType } from "../api_js/serverAPI";

    const params = defineProps(["entry"]);

    const emit = defineEmits(["videoSelected"]);

    function select_video( entry: VideoType ) {
        if( entry.type == "video" ) {
            emit("videoSelected", entry);
        }
    }
</script>

<template>
    <div class="vidlistentry" @click="select_video(entry)">
        <div v-if="entry.type != 'sublist'">
            <div>{{ entry.name }}</div>
            <img :src="entry.image">
        </div>
        <details v-if="entry.type == 'sublist'">
            <summary>
                {{ entry.name }}
                <div><img :src="entry.image"></div>
            </summary>
            <VideoList
                :channelList="entry.entries"
                @videoSelected="$emit('videoSelected', $event)"
            />
        </details>
    </div>
</template>

<style scoped>
    details > summary {
        list-style-type: "+ ";
    }
    details[open] > summary {
        list-style-type: "- ";
    }

    .vidlistentry {
        cursor: pointer;
        border: 1px var(--color-ltolive) solid;
        border-radius: 5px;
        padding: 5px;
    }

    img {
        width: 90%;
    }
</style>
