<script setup>
// 在 Vue3 CompositionAPI 中
// 1. 获取路由对象 router useRouter
//    const router = userRouter()
// 2. 获取路由参数 route useRoute()
//    const route = useRoute()
import { useUserStore, useCounterStore } from '@/stores'

const goList = () => {}

const userStore = useUserStore()
const counterStore = useCounterStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    我是app
    <el-button @click="$router.push('/home')">跳首页</el-button>
    <el-button @click="goList">跳列表页</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('dfhaklfhdaslf')">登录</el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>
    <hr />
    <p>{{ counterStore.count }}</p>
    <el-button @click="counterStore.increment">加1</el-button>
  </div>
</template>

<style scoped></style>
