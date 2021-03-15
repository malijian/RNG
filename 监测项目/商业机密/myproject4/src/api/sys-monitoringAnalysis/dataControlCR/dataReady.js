import request from '@/utils/request'
// 数据管控---数据准备任务

// 获取查询列表数据
export function searchQuery(paramsObj) {
  return request({
    url: 'caml-model/modelData/selectByOne',
    method: 'post',
    params: paramsObj
  })
}

// 删除
export function dataDelete(id) {
  return request({
    url: 'caml-model/modelData/delete?taskId=' + id,
    method: 'delete'
  })
}

// 批量删除
export function batchDelete(params) {
  return request({
    url: 'caml-model/modelData/batchdelete?taskId=' + params,
    method: 'delete'
  })
}

// 终止
export function stop(taskId, modelTable) {
  return request({
    url: 'caml-model/modelData/stop?taskId=' + taskId + '&modelTable=' + modelTable,
    method: 'post'
  })
}
// 批量终止
export function batchStop(taskId, modelTable) {
  return request({
    url: 'caml-model/modelData/batchStop?taskId=' + taskId + '&modelTable=' + modelTable,
    method: 'post'
  })
}

// 预览数据
export function previewData(data) {
  return request({
    url: 'caml-model/previewData/select',
    method: 'get',
    params: data
  })
}

// 执行日志
export function performLog(taskId) {
  return request({
    url: 'caml-model/modelData/selectByLog?taskId=' + taskId,
    method: 'get'
  })
}

// 添加数据集
export function addDataCentratSets(params) {
  return request({
    url: 'caml-model/modelData/add',
    method: 'post',
    data: params
  })
}

// 添加数据集 建模数据传递id
export function addDataModeling(taskId) {
  return request({
    url: 'caml-model/model/query/queryTaskList?taskId=' + taskId,
    method: 'get'
  })
}

// 添加数据集测试
export function connectTest(params) {
  return request({
    url: 'caml-model/modelData/testConnection',
    method: 'post',
    data: params
  })
}

// 查看数据模板详情
export function dataTemplateDetails(taskId) {
  return request({
    url: 'caml-model/model/query/dataTemplateDetails?taskId=' + taskId,
    method: 'get'
  })
}

// 添加数据集
export function dSUser(params) {
  return request({
    url: 'caml-model/model/query/dSUser',
    method: 'post',
    data: params
  })
}

// 获取分配数据集用户的名称
export function obtainCentratSets(token, arrId) {
  return request({
    url: 'caml-model/model/query/feignSysMy2?token=' + token + '&&deptId=' + arrId,
    method: 'get'
  })
}

// 分配数据集
export function addDataCentratSetsNew(token) {
  return request({
    url: 'caml-model/model/query/feignSys?token=' + token,
    method: 'get'
  })
}

// 回显数据集
export function showDataInfo(taskId) {
  return request({
    url: 'caml-model/model/userlist/selectlinkinfor?taskId=' + taskId,
    method: 'get'
  })
}

// 修改数据集
export function editDataCentratSets(params, connType) {
  return request({
    url: 'caml-model/modelData/editData?connType=' + connType,
    method: 'post',
    data: params
  })
}
