<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { notify_error } from "./Helpers";

    import type { Ref } from "vue";
    import type { VideoType } from "../api_js/serverAPI";

    import { apiGetActiveChannel, apiGetChannelList } from "../api_js/serverAPI";

    import VideoList from "./VideoList.vue";
    import ChannelList from "./ChannelList.vue";
    import VideoPlay from "./VideoPlay.vue";

    const channel_list: Ref<Array<VideoType>> = ref([]);
    const video_selected: Ref<VideoType> = ref({});

    onMounted( get_active_channel );

    function select_video( video: VideoType ) : void {
        video_selected.value = video;
        const vidplay = window.document.querySelector("#vidplay") as HTMLDivElement | null;
        if( vidplay != null ) {
            window.scrollTo(0, vidplay.offsetTop);
        }
    }

    function get_active_channel() : void {
        apiGetActiveChannel()
            .then( (chan_list) => {
                channel_list.value = chan_list.data.entries;
            } )
            .catch( (error: any) => { notify_error(`Error getting channel channel: ${error}`); } );
    }
</script>

<template>
    <div id="content">
        <!-- <ChannelList :channelList="channel_list_list" @channelSelected="select_channel" /> -->
        <VideoList id="vidlist" :channelList="channel_list" @videoSelected="select_video" />
        <VideoPlay id="vidplay" v-model:video="video_selected" />
    </div>
</template>

<style scoped>
    #content {
        display: flex;
        flex-direction: row-reverse;
        border-width: 1px;
        border-radius: 20px;
        padding: 8px;
    }

    #vidlist {
        width: 20%;
        text-align: center;
    }

    #vidplay {
        width: 80%;
        margin-right: 5px;
    }

    @media (max-width: 700px) {
        #content {
            display: block;
        }
        #vidlist {
            width: 100%;
        }
        #vidplay {
            width: 100%;
            margin-right: 0px;
        }
    }

    VideoPlay, VideoList {
        margin-bottom: 5px;
    }
</style>
