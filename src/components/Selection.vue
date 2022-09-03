<script setup>
    import { ref, onMounted } from "vue";

    import { apiGetChannelLists, apiGetChannelList } from "../api_js/serverAPI.js";

    import VideoList from "./VideoList.vue";
    import ChannelList from "./ChannelList.vue";
    import VideoPlay from "./VideoPlay.vue";

    const video_list = ref([]);
    const video_selected = ref("");

    const channel_list = ref([""]);
    const channel_selected = ref("");

    onMounted( get_channel_lists );

    function get_channel_lists() {
        apiGetChannelLists()
            .then( (chan_list) => { channel_list.value = chan_list.data; } );
    }

    function select_video( video ) {
        video_selected.value = video;
    }

    function select_channel( channel ) {
        channel_selected.value = channel;
        apiGetChannelList(channel)
            .then( (vid_list) => { video_list.value = vid_list.data.entries; } );
    }
</script>

<template>
    <ChannelList :channelList="channel_list" @channelSelected="select_channel" />
    <VideoList :videoList="video_list" @videoSelected="select_video" />
    <VideoPlay v-model:video="video_selected" />
</template>
