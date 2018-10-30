<template>
    <div>
        <head-nav></head-nav>
    </div>
</template>

<script>
import headNav from '../../components/header/index.vue'
import { 
    login, 
    interfaceList }  from '../../api/setting/index.js'
    export default {
        name: 'setting',
        components: {
            headNav
        },
        data() {
            return {

            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList(){
                interfaceList().then(res => {
                    console.log()
                })
            }
        }
    }
</script>