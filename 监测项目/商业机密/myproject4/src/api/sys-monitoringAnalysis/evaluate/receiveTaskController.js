import request from '@/utils/request'

// 接受评价列表数据
export function listAll(map) {
  return request({
    url: 'monitor/receive/list-All',
    method: 'post',
    data: map
  })
}
// 全部智能评价
export function allEvaluation(evaluationTaskId, evaluationTaskName, startNum) {
  return request({
    url: 'monitor/receive/evaluationEvering',
    method: 'post',
    data: {
      evaluationTaskId,
      evaluationTaskName,
      startNum
    }
  })
}
// 接受评价列表任务详情
export function taskDetail(map) {
  return request({
    url: 'monitor/receive/taskDetail',
    method: 'post',
    data: map
  })
}

// 评价任务名称下拉数据
export function allTaskName() {
  return request({
    url: 'monitor/receive/allTaskName',
    method: 'get'
  })
}
// 评价任务名称下拉数据
// export function saveRefinementIndicator(list) {
//   return request({
//     url: 'monitor/receive/saveRefinementIndicator',
//     method: 'post',
//     data: list
//   })
// }
// 删除细化指标
export function deleteRefinementIndicator(secondaryIndicatorId) {
  return request({
    url: 'monitor/receive/deleteRefinementIndicator/' + secondaryIndicatorId,
    method: 'post'
  })
}
// 反显细化指标
export function indicatorReturn(targetId) {
  return request({
    url: 'monitor/receive/indicatorReturn/' + targetId,
    method: 'get'
  })
}
// 保存细化指标
export function saveRefinementIndicator(list, deleteSecondId) {
  return request({
    url: 'monitor/receive/saveRefinementIndicator',
    method: 'post',
    data: {
      list,
      deleteSecondId
    }
  })
}
// 试算初始数据
export function trialCalculation(map) {
  return request({
    url: 'monitor/receive/trialCalculation',
    method: 'post',
    data: map
  })
}
// 智能评价
export function evaluation(map) {
  return request({
    url: 'monitor/receive/evaluation',
    method: 'post',
    data: map
  })
}
// 一键智能评价
export function evaluationAll(list) {
  return request({
    url: 'monitor/receive/evaluationAll',
    method: 'post',
    data: list
  })
}
// 确认提交细化指标
export function submit(list) {
  return request({
    url: 'monitor/receive/submit',
    method: 'post',
    data: list
  })
}
// 下载
export function createExcel(assignationOrganization, firstTargetName, sumScore, list) {
  return request({
    url: 'monitor/receive/createExcel/' + assignationOrganization + '/' + firstTargetName + '/' + sumScore,
    method: 'post',
    data: list
  })
}
// 查看试算
export function listTrial(evaluationTaskName, evaluationTaskId) {
  return request({
    url: 'monitor/receive/list-Trial',
    method: 'post',
    data: {
      evaluationTaskName: evaluationTaskName,
      evaluationTaskId: evaluationTaskId
    }
  })
}

// 整合查看试算
export function listTrial3(name, evaluationTaskId, evaluationTaskName, returnList) {
  return request({
    url: 'monitor/integratedEvaluation/list-TrialAll/' + name + '/' + evaluationTaskId + '/' + evaluationTaskName + '/' + '1',
    method: 'post',
    data: returnList
  })
}

// 查看试算
export function deleteTemp() {
  return request({
    url: 'monitor/receive/deleteTemp',
    method: 'post'
  })
}
// 定性下拉
export function getScore(data) {
  return request({
    url: 'monitor/receive/getScore',
    method: 'post',
    data: data
  })
}
// 分页保存总数
export function insertTemp(data) {
  return request({
    url: 'monitor/receive/insertTemp',
    method: 'post',
    data: data
  })
}
// 保存校验
export function checkAbsolute(list) {
  return request({
    url: 'monitor/receive/checkAbsolute',
    method: 'post',
    data: list
  })
}
export function listTrial2(evaluationTaskName, officeStaffId, evaluationTaskId) {
  return request({
    url: 'monitor/integratedEvaluation/list-Trial',
    method: 'post',
    data: {
      evaluationTaskName,
      officeStaffId,
      evaluationTaskId
    }
  })
}

export function alterWeight(list) {
  return request({
    url: 'monitor/receive/alter-weight',
    method: 'post',
    data: list
  })
}

