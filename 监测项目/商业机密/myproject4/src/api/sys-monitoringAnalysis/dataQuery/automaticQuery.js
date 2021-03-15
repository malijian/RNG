import request from '@/utils/request'
// 批量查询

// export function maximumData(obj) { // 限制最大交易笔数
//   return request({
//     url: 'monitor/automatic/maximum/transactions/sync8a',
//     method: 'post',
//     data: obj,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
// }
export function maximumData(autoMaticId) { // 限制最大交易笔数
  return request({
    url: 'monitor/automatic/maximum/transactions/sync8a/' + autoMaticId,
    method: 'get'
  })
}
// 轮询查询
export function getListFor(pageInfo) { // 批量自动任务列表
  return request({
    url: 'monitor/automatic/list',
    method: 'get',
    params: {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}
// 第一次查询
export function getList(pageInfo) { // 批量自动任务列表
  return request({
    url: 'monitor/automatic/list/forpage',
    method: 'get',
    params: {
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}
export function delData(ids) { // 批量自动任务列表--删除
  return request({
    url: 'monitor/automatic?id=' + ids,
    method: 'delete'
  })
}

export function getAddData(obj) { // 新增
  return request({
    url: 'monitor/automatic/add',
    method: 'post',
    data: obj,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function getTask(generate, autoMaticId) { // 批量自动任务查询
  return request({
    url: 'monitor/automatic/sync8a/' + autoMaticId + '/' + generate,
    method: 'get'
  })
}

export function getProgress(ids) { // 批量自动任务查询--进度条
  return request({
    url: 'monitor/automatic/speed/of/progress?ids=' + ids,
    method: 'get'
  })
}

export function startProgress(autoMaticId) { // 批量自动任务查询--开始任务
  return request({
    url: 'monitor/automatic/start/sync8a',
    method: 'get',
    params: {
      autoMaticId: autoMaticId
    }
  })
}

export function pauseProgress(autoMaticId) { // 批量自动任务查询--暂停任务
  return request({
    url: 'monitor/automatic/suspend',
    method: 'get',
    params: {
      autoMaticId: autoMaticId
    }
  })
}

export function getPersonList(autoMaticId, pageInfo) { // 查看敏感信息列表
  return request({
    url: 'monitor/automatic/to/see/sensitive/person/sync8a',
    method: 'get',
    params: {
      autoMaticId: autoMaticId,
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}

export function addPersonInfo() { // 添加敏感信息
  return request({
    url: 'monitor/automatic/add/all/sensitive/person',
    method: 'post'
  })
}

export function delPersonInfo(pkSub) { // 删除敏感信息
  return request({
    url: 'monitor/automatic/dele/sensitive/person?pkSub=' + pkSub,
    method: 'delete'
  })
}

export function getApproalList(form, pageInfo) {
  return request({
    url: 'monitor/automatic/approval/list',
    method: 'get',
    params: {
      autCreUser: form.autCreUser,
      starDate: form.dataValue[0],
      endDate: form.dataValue[1],
      autApproval: form.autApproval,
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}

export function tplViewData(id) { // 模板返显
  return request({
    url: 'monitor/governor/template/basis/' + id + '/select',
    method: 'get'
  })
}

export function approvalStaus(paramsObj) { // 敏感任务审批
  return request({
    url: 'monitor/automatic/examination/and/approval',
    method: 'post',
    data: paramsObj
  })
}

export function updateForm(workflow, correctId) {
  return request({
    url: 'monitor/automatic/exam/' + correctId,
    method: 'put',
    data: workflow
  })
}

export function updatePersonList(paramsObj) { // 新增及更新敏感人物数据
  return request({
    url: '/monitor/automatic/add/all/sensitive/person',
    method: 'post',
    data: paramsObj
  })
}

export function sendFtp(autId) {
  return request({
    url: 'monitor/queryAutomaticFtp/sendFtp?autId=' + autId,
    method: 'get'
  })
}

export function addQuery(obj) { // 添加批量查询任务   预警结果
  return request({
    url: 'monitor/gbase/trade/warning/add',
    method: 'post',
    data: obj
  })
}
