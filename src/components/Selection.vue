<script setup>
    import { ref, onMounted } from "vue";
    import { notify_error } from "./Helpers.js";

    import { apiGetActiveChannel, apiGetChannelList } from "../api_js/serverAPI.js";

    import VideoList from "./VideoList.vue";
    import ChannelList from "./ChannelList.vue";
    import VideoPlay from "./VideoPlay.vue";

    const channel_list = ref([]);
    const video_selected = ref("");

    //const channel_list_list = ref([""]);
    //const channel_selected = ref("");

    onMounted( get_active_channel );

    function select_video( video ) {
        video_selected.value = video;
        window.scrollTo(0, window.document.querySelector("#vidplay").offsetTop);
    }

    function get_active_channel( channel ) {
        apiGetActiveChannel(channel)
            .then( (chan_list) => { channel_list.value = chan_list.data.entries; } )
            .catch( (error) => { notify_error(`Error getting channel channel: ${error}`); } );
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
