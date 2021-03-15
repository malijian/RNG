import request from '@/utils/request'

// 查询线索
export function getClues(params) {
  return request({
    url: 'monitor/reportClue',
    method: 'get',
    params: params
  })
}
// 编辑判断
export function getEdit(createUserId) {
  return request({
    url: 'monitor/reportClue/opAuth',
    method: 'get',
    params: {
      createUserId
    }
  })
}
// 新建线索库
export function saveClue(params) {
  return request({
    url: 'monitor/reportClue',
    method: 'post',
    data: params
  })
}

// 导出单条线索
export function exportClue(params) {
  return request({
    url: 'monitor/reportClue/export',
    method: 'get',
    params: params
  })
}

// 批量导出索库
export function exportClueBatch(params) {
  return request({
    url: 'monitor/reportClue/exportBatch',
    method: 'get',
    params: params
  })
}

// 删除线索库
export function deleteClue(params) {
  return request({
    url: `monitor/reportClue/${params}`,
    method: 'delete'

  })
}

// 编辑线索
export function editClue(params) {
  return request({
    url: `monitor/reportClue/${params}`,
    method: 'get'

  })
}

// 更新线索
export function putClue(params) {
  return request({
    url: `monitor/reportClue`,
    method: 'put',
    data: params

  })
}

// 设置共享状态PUT /reportClue/updateState
export function setState(id, state) {
  return request({
    url: `monitor/reportClue/updateState/${id}/${state}`,
    method: 'put'

  })
}
// 删除附件
export function delAttach(params, url) {
  return request({
    url: url,
    method: 'get',
    params: params
  })
}
// 是否线索审批员
export function getPower(params) {
  return request({
    url: 'monitor/reportClue/isApprove',
    method: 'get',
    params: params
  })
}
// 审批流程
export function approve(params) {
  return request({
    url: `monitor/reportClue/approve?clueId=${params.clueId}&currentState=${params.currentState}`,
    method: 'put'
  })
}
export function getDeptName(params) {
  return request({
    url: `monitor/reportClue/selectUserDeptName`,
    method: 'get'
  })
}
export function checkReport(params) {
  return request({
    url: `/monitor/reportClue/exportBatch?clueId=${params.ids}&token=${params.token}`,
    method: 'get'
  })
}

export function getReportFlag() {
  return request({
    url: `/monitor/reportClue/isDownloads`,
    method: 'get'
  })
}
