<template>
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th><a v-on:click="sortBy('id')">Id</a></th>
                <th><a v-on:click="sortBy('gender')">Gender</a></th>
                <th><a v-on:click="sortBy('firstName')">First Name</a></th>
                <th><a v-on:click="sortBy('lastName')">Last Name</a></th>
                <th><a v-on:click="sortBy('email')">Email</a></th>
                <th><a v-on:click="sortBy('credit')">Credit</a></th>
                <th><a v-on:click="sortBy('debit')">Debit</a></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in sortedUsers">
                <th>{{user.id}}</th>
                <th>{{user.gender}}</th>
                <th>{{user.firstName}}</th>
                <th>{{user.lastName}}</th>
                <th>{{user.email}}</th>
                <th>{{user.credit}}</th>
                <th>{{user.debit}}</th>
            </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
    export default {
        name: 'DataTable',
        data() {
            return {
                users: this.data,
                reverse: false,
                sortKey: 'id'
            };
        },
        props: {
            data: {
                require: true,
                default: function () { return []; }
            },
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
        }
    };
</script>