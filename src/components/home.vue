<template>
    <div>
        this is home div
        <button @click="change">click</button>
    </div>
</template>
<script>
    export default {
        name:"home",
        data() {
            return {

            }
        },
        mouted() {
            this.bindAccount()
        },
        methods: {
            change() {
                this.$router.push({
                    path:'/setting'
                })
            },
        }
    }
</script>