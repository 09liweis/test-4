<template>
    <div class="columns">
        <div class="column">
            <GenderChart :data="users" />
        </div>
        <div class="column">
            <DebitBarChart :data="users" />
        </div>
        <div class="column">
            <GenderBalanceChart :data="users" />
        </div>
    </div>
</template>
<script>
import GenderChart from './charts/GenderChart.vue';
import DebitBarChart from './charts/DebitBarChart.vue';
import GenderBalanceChart from './charts/GenderBalanceChart.vue';
export default {
    name: 'Charts',
    components: {
        GenderChart,
        DebitBarChart,
        GenderBalanceChart
    },
    data() {
        return {
            users: this.data
        };
    },
    props: {
        data: {
            require: true,
            default: function () { return []; }
        },
    },
};
</script>