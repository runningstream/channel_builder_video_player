<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { notify_error } from "./Helpers";

    import type { Ref } from "vue";
    import type { VideoType } from "../api_js/serverAPI";

    import { apiGetActiveChannel } from "../api_js/serverAPI";

    import VideoList from "./VideoList.vue";
    import ChannelList from "./ChannelList.vue";
    import VideoPlay from "./VideoPlay.vue";
    import Alert from "./Alert.vue";
    import Spinner from "./Spinner.vue";

    const channel_list: Ref<Array<VideoType>> = ref([]);
    const video_selected: Ref<VideoType> = ref({});
    const show_spinner = ref(false);
    const alert_err_get_chan = ref(false);

    onMounted( get_active_channel );

    function select_video( video: VideoType ) : void {
        video_selected.value = video;
        const vidplay = window.document.querySelector("#vidplay") as HTMLDivElement | null;
        if( vidplay != null ) {
            window.scrollTo(0, vidplay.offsetTop);
        }
    }

    function get_active_channel() : void {
        show_spinner.value = true;
        apiGetActiveChannel()
            .then( (chan_list) => {
                show_spinner.value = false;
                channel_list.value = chan_list.data.entries;
            } )
            .catch( (_error: any) => {
                show_spinner.value = false;
                alert_err_get_chan.value = true;
            } );
    }
</script>

<template>
    <div id="content">
        <!-- <ChannelList :channelList="channel_list_list" @channelSelected="select_channel" /> -->
        <VideoList id="video_list" :channelList="channel_list" @videoSelected="select_video" />
        <VideoPlay id="video_play" v-model:video="video_selected" />
        <Alert
            text="Error getting channel."
            :display="alert_err_get_chan" @closeModal="alert_err_get_chan=false"
        />
        <Spinner :display="show_spinner" />
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

    #video_list {
        width: 20%;
        text-align: center;
        margin-bottom: 5px;
    }

    #video_play {
        width: 80%;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    @media (max-width: 700px) {
        #content {
            display: block;
        }
        #video_list {
            width: 100%;
        }
        #video_play {
            width: 100%;
            margin-right: 0px;
        }
    }
</style>
