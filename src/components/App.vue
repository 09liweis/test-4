<template>
    <div>
        <FileUpload />
        <router-view></router-view>
    </div>
</template>
<script>
import FileUpload from './FileUpload.vue';
export default {
    name: 'app',
    components: {
        FileUpload
    },
    data() {
        return {
            users: []
        };
    }
};
</script>