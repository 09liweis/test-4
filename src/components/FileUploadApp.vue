<template>
    <div class="container">
        <h1 class="has-text-centered is-size-1 has-text-info">Vue File Upload Test</h1>
    <div id="file-upload" v-if="users.length == 0">
        <div class="file is-centered is-boxed is-large">
            <label class="file-label">
                <input class="file-input" type="file" name="csv" @change="uploadFile" />
                <span class="file-cta">
                    <span class="file-icon">
                        <i class="fa fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                </span>
            </label>
        </div>
    </div>
    <div class="" v-if="users.length > 0">
        <div class="tabs">
            <ul>
                <li :class="view == 'table' ? 'is-active' : ''"><a v-on:click="changeView('table')">Table</a></li>
                <li :class="view == 'charts' ? 'is-active' : ''"><a v-on:click="changeView('charts')">Charts</a></li>
            </ul>
        </div>
        <Charts v-if="view == 'charts'" :data="users" />
            
        <DataTable :data="users" v-if="view == 'table'" />
    </div>
    </div>
</template>

<script>
import DataTable from './DataTable.vue';
import Charts from './Charts.vue';
    export default {
        name: 'FileUpload',
        components: {
            DataTable,
            Charts
        },
        data() {
            return {
                view: 'table',
                users: [],
            };
        },
        methods: {
            changeView(view) {
                this.view = view;
            },
            uploadFile(e) {
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
                };
                fileReader.readAsText(file);
            }
        }
    };
</script>
<style>
    html, body, .container {
        height: 100%;
    }
    #file-upload {
        position: relative;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>