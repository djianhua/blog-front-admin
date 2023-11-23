<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 在 Vue3 CompositionAPI 中
// 1. 获取路由对象 router useRouter
//    const router = userRouter()
// 2. 获取路由参数 route useRoute()
//    const route = useRoute()
</script>

<template>
  <div>
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
