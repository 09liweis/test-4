<template>
    <div class="container">
    <div id="file-upload">
        <h1>Upload</h1>
        <div class="file is-boxed">
            <label class="file-label">
                <input class="file-input" type="file" name="csv" @change="readFile" />
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
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'FileUpload',
        components: {
        },
        props: {
            readFile: {
                require: true
            }
        },
        data() {
            return {
                users: [],
                reverse: false,
                sortKey: 'id'
            };
        },
        computed: {
            sortedUsers() {
                return this.users.sort((a, b) => {
                    const valA = (this.sortKey == 'id') ? parseInt(a[this.sortKey]) : a[this.sortKey];
                    const valB = (this.sortKey == 'id') ? parseInt(b[this.sortKey]) : b[this.sortKey];
                    if (this.reverse) {
                        return valA < valB ? 1: -1;    
                    }
                    return valA > valB ? 1 : -1;
                });
            }
        },
        methods: {
            sortBy(key) {
                this.reverse = this.sortKey == key ? !this.reverse : false;
                this.sortKey = key;
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