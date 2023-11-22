<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import {
  articleGetChannelsService,
  articleDelChannelService
} from '../../api/article'
import ChannelEdit from '../../components/ChannelEdit.vue'
const channelList = ref([])
const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
getChannelList()

const onDeleteChannel = async (row) => {
  await ElMessageBox.confirm('你确认要删除该分类吗', '温馨提示', {
    type: 'waring',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await articleDelChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList()
}
const onEditChannel = (row) => {
  dialog.value.open(row)
}
const onAddChannel = () => {
  dialog.value.open({})
}
const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分类</el-button>
    </template>
    <el-table v-loading="dialogVisible" :data="channelList" style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="100">
        <!-- row 就是 channelList 的一项 $index 下标 -->
        <template #default="{ row, $index }">
          <el-button
            plain
            type="primary"
            circle
            :icon="Edit"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            plain
            type="danger"
            circle
            :icon="Delete"
            @click="onDeleteChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
