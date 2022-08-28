<script setup>
    const params = defineProps(["title", "url"]);

</script>

<template>
    <div>
        <div>Title: {{ title }}</div>
        <div>URL: {{ url }}</div>
    </div>
</template>
