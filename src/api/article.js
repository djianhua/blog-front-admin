import request from '@/utils/request'
// 获取文章分类
export const articleGetChannelsService = () => request.get('/my/cate/list')
// 添加文章分类
export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)
// 编辑文章分类
export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)
// 删除文章分类
export const articleDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
// 文章：获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })
