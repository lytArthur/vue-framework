<template>
    <div class="headerContainer">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#000"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                <el-menu-item index="3">消息中心</el-menu-item>
            </el-menu>

               <el-tree
                  :data="dataAttr"
                  :props="defaultPropsAttr"
                  :check-on-click-node="true"
                  node-key="category_attribute_values_id"
                  show-checkbox
                  v-loading='loadingAttr'
                  ref="idAttr">
              </el-tree>
    </div>
</template>

<script>
import { getAttributes } from '../../api/setting/index.js'
export default {
    name: 'headerNav',
    data() {
        return {
            activeIndex  : '1',
            activeIndex2 : '1',
            dataAttr     : [],
            arr          : ['category_attributes','attribute_values'],
            defaultPropsAttr : {
                children: "attribute_values",
                label: "value"
            },
            loadingAttr  : false,
            testData     : [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                            }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1'
                            }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                      }]
                    }],
        }
    },
    mounted() {
        this.getAttrList()
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log('key',key)
            // console.log('keyPath', keyPath)
        },
        getAttrList() {
          getAttributes().then(res => {
               if(res.success) {
                   this.dataAttr = res.data.map(this.testList)
                }
            })
        },
        testList(v,index) {
            let keys = this.arr.find(key => v[key]);
            let val  = v[keys]
            if(!val)
            return {
                ...v,
                name : v.value
            }
            return {
                ...v,
                [keys] : val.map(this.testList)
            }
        },
        deepMap() {

        }
    }
}
</script>

<style scoped>
/* .headerContainer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #000;
} */
/* .navColor {
    color: #fff;
} */
</style>
