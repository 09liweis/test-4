import Vue from 'vue';
import App from './components/App.vue';
import FileUpload from './components/FileUpload.vue';
import VueRouter from 'vue-router';
import DataTable from './components/DataTable.vue';
import Charts from './components/Charts.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
    {
        path: '/',
        name: 'DataTable',
        component: DataTable,
        props: true
    },
    {
        path: '/charts',
        component: Charts
    }
]});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<FileUpload :readFile="readFile"/>',
    components: { FileUpload },
    data() {
        return {
            users: []
        };
    },
    methods: {
        readFile(e) {
            const files = e.target.files;
            const file = files[0];
            var fileReader = new FileReader();
            let users = [];
            const _this = this;
            fileReader.onload = function(e) {
                const rows = fileReader.result.split('\n');
                rows.shift();
                
                users = rows.map((row) =>{
                    const userArray = row.split(',');
                    return {
                        id: userArray[0],
                        firstName: userArray[1],
                        lastName: userArray[2],
                        email: userArray[3],
                        gender: userArray[4],
                        credit: userArray[5] || '',
                        debit: userArray[6] || '',
                    };
                });
                _this.users = users;
                router.push({
                    name: 'DataTable',
                    params: {
                        data: users
                    }
                });
            };
            fileReader.readAsText(file);
        }
    }
})