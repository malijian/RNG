import request from '@/utils/request'

// 整合评价标准 评价任务名称下拉数据
export function getAllEvaluationTask() {
  return request({
    url: 'monitor/integratedEvaluation/getAllEvaluationTask',
    method: 'get'
  })
}
// 整合评价标准 查询列表
export function feedBackList(data) {
  return request({
    url: 'monitor/integratedEvaluation/feedBack-list',
    method: 'post',
    data: data
  })
}
// 整合评价标准 查看反馈情况
export function queryFeedbackSituation(map) {
  return request({
    url: 'monitor/integratedEvaluation/queryFeedbackSituation',
    method: 'post',
    data: map
  })
}
// 整合评价标准 确定
export function confirm(queryBackDO) {
  return request({
    url: 'monitor/integratedEvaluation/confirm',
    method: 'post',
    data: queryBackDO
  })
}
// 整合评价标准 退回
export function goBack(queryBackDO) {
  return request({
    url: 'monitor/integratedEvaluation/goBack',
    method: 'post',
    data: queryBackDO
  })
}
// 整合评价标准 整合指标方案
export function integratedIndicatorProgram(evaluationTaskName) {
  return request({
    url: 'monitor/integratedEvaluation/integratedIndicatorProgram/' + evaluationTaskName,
    method: 'get'
  })
}
// 整合评价标准 保存并发送评价任务
export function saveAndSend(name, version, evaluationTaskId, evaluationTaskName, returnList) {
  return request({
    url: 'monitor/integratedEvaluation/saveAndSend/' + name + '/' + version + '/' + evaluationTaskId + '/' + evaluationTaskName + '/' + '1',
    method: 'post',
    data: returnList
  })
}
// 整合评价标准 下载并发送评价任务
export function downloadExcel(list) {
  return request({
    url: 'monitor/integratedEvaluation/downloadExcel',
    method: 'post',
    data: list
  })
}
// 整合评价标准 下载并发送评价任务
export function queryTrialCalculation(map) {
  return request({
    url: 'monitor/integratedEvaluation/queryTrialCalculation',
    method: 'post',
    data: map
  })
}
// baocun
export function saveAndSend1(name, version, returnList) {
  return request({
    url: 'monitor/integratedEvaluation/saveAndSend/' + name + '/' + version,
    method: 'post',
    data: returnList
  })
}
// 整合页面列表的默认接口
export function feedBackDefaultList() {
  return request({
    url: 'monitor/integratedEvaluation/feedBackDefault-list',
    method: 'post'
  })
}
