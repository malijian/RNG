import request from '@/utils/request'

// 走流程里的接口 - 接口

// 工作台  节点提交
export function sendNextTime(params) {
  return request({
    url: '/monitor/international/updateyewu',
    method: 'put',
    data: params
  })
}

// 办理信息
// 查看流程 - 办理信息
export function getApprovalapi(mailId) {
  return request({
    url: `/monitor/international/transactGj/${mailId}`,
    method: 'get'
  })
}

// 查看流程 - 表- 反显
export function getFormapi(mailId) {
  return request({
    url: `/monitor/international/selectByOne/${mailId}`,
    method: 'get'
  })
}

//  相关附件 - 附件列表
export function getFilelistApi(params) {
  return request({
    url: `/monitor/international/file-list/${params}`,
    method: 'get'
    // params: params
  })
}

//  相关附件 - 删除
export function deleteFileApi(fileId) {
  return request({
    url: `/monitor/international/del-attachGj1/${fileId}?moduleName=线索管理`,
    method: 'delete'
  })
}

// 编辑 - 保存
export function editeList(params) {
  return request({
    url: '/monitor/international/updateinform',
    method: 'put',
    data: params
  })
}

// 新增 - 保存
export function sendList(params) {
  return request({
    url: '/monitor/international/add',
    method: 'post',
    data: params
  })
}

// 新增 - 提交
export function sendListflow(params) {
  return request({
    url: '/monitor/international/addFlow',
    method: 'post',
    data: params
  })
}

