<script setup>
    const params = defineProps(["channelList"]);
    const emit = defineEmits(["channelSelected"]);

    function channel_selected(channel) {
        emit("channelSelected", channel);
    }
</script>

<template>
    <div id="channel_list">
        <div class="channel_list_entry"
            v-for="channel in channelList"
            @click="channel_selected(channel)"
        >
            {{ channel }}
        </div>
    </div>
</template>

<style scoped>
    #channel_list .channel_list_entry:nth-child(odd) {
        background: var(--color-teal);
    }
    #channel_list .channel_list_entry:nth-child(even) {
        background: var(--color-ltolive);
    }

    #channel_list > div {
        cursor: pointer;
        border: 1px var(--color-ltolive) solid;
        border-radius: 20px;
        padding: 20px;
    }
</style>
