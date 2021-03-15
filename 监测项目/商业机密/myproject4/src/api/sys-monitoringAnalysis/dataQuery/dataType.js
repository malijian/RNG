import request from '@/utils/request'
// 特定查询
export function getTplList() { // 获取模板下拉列表
  return request({
    url: '/caml-query/governor/template/condition',
    method: 'get'
  })
}
// 下载结果
export function downLoadResult(id) {
  return request({
    url: '/monitor/automatic/download/file?autoMaticId=' + id,
    method: 'get'
  })
}
export function getCatchQueryKey(key) { // 查询--从缓存里面获取信息
  return request({
    url: '/caml-query/query/template/cache/acquisition/' + key,
    method: 'get'
  })
}

export function getQueryList(paramsObj) { // 获取查询列表--当日
  return request({
    url: '/caml-query/query/template',
    method: 'post',
    data: paramsObj
  })
}

export function getNotQueryList(paramsObj) { // 获取查询列表--非当日
  return request({
    url: '/caml-query/query/template/sync8a',
    method: 'post',
    data: paramsObj
  })
}
// 宋显鹏添加 近线离线查询
export function nearOffLine(paramsObj) { // 获取查询列表--非当日
  return request({
    url: '/caml-query/query/template/check/task',
    method: 'post',
    data: paramsObj
  })
}

// 宋显鹏添加 近线离线查询启动任务
export function taskNearOffLine(paramsObj) { // 获取查询列表--非当日
  return request({
    url: '/caml-query/query/template/task',
    method: 'post',
    data: paramsObj
  })
}

export function getTradeData(tradeDetailInfo) { // 查看交易详情--当日
  return request({
    url: '/caml-query/query/template/' + tradeDetailInfo.id,
    method: 'get',
    params: {
      tableId: tradeDetailInfo.tableId,
      newDate: tradeDetailInfo.newDate,
      timer: tradeDetailInfo.timer
    }
  })
}

export function getNotTradeData(tradeDetailInfo) { // 查看交易详情--非当日
  return request({
    url: '/caml-query/query/template/' + tradeDetailInfo.id + '/sync8a',
    method: 'get',
    params: {
      tableId: tradeDetailInfo.tableId,
      newDate: tradeDetailInfo.newDate,
      timer: tradeDetailInfo.timer
    }
  })
}

export function getCountData(paramsObj) { // 统计--当日
  return request({
    url: '/caml-query/query/template/statistics',
    method: 'post',
    data: paramsObj
  })
}

export function getNotCountData(paramsObj) { // 统计--非当日
  return request({
    url: '/caml-query/query/template/statistics/sync8a',
    method: 'post',
    data: paramsObj
  })
}

export function getRecordList(paramsObj) { // 纠删履历
  return request({
    url: 'monitor/governance/correct/task/bigreport-trace',
    method: 'get',
    params: paramsObj
  })
}

export function getCompare(paramsObj) { // 对比
  return request({
    url: 'monitor/governance/correct/task/compare',
    method: 'get',
    params: paramsObj
  })
}

export function getReortBaseList(paramsObj) { // 报告详情--基本信息
  return request({
    url: '/caml-query/report/query/' + paramsObj.id + '/report?tableId=' + paramsObj.tableId + '&newDate=' + paramsObj.newDate,
    method: 'get'
  })
}

export function getReportCustomerList(paramsObj, pageInfo) { // 报告详情--客户信息
  return request({
    url: '/caml-query/report/query/' + paramsObj.id + '/customer?tableId=' + paramsObj.tableId + '&newDate=' + paramsObj.newDate,
    method: 'get',
    params: pageInfo
  })
}

export function getReportTradeList(paramsObj, pageInfo) { // 报告详情--交易信息
  return request({
    url: '/caml-query/report/query/' + paramsObj.id + '/trade?tableId=' + paramsObj.tableId + '&newDate=' + paramsObj.newDate,
    method: 'get',
    params: pageInfo
  })
}

export function getAttachmentList(paramsObj) { // 报告详情--附件列表
  return request({
    url: '/caml-query/report/query/' + paramsObj.id + '/attachment?tableId=' + paramsObj.tableId + '&newDate=' + paramsObj.newDate,
    method: 'get'
  })
}

export function fileExport(messageModel) { // 导出全部是否生成excel
  return request({
    url: '/caml-query/query/template/importAllCache/' + messageModel.tableName + '/' + messageModel.key + '?newDate=' + messageModel.newDate,
    method: 'get'
  })
}

export function queryExport(rk, tableName, families, fileName) {
  return request({
    url: '/caml-hbase/hbase/getJudge/' + rk + '?tableName=' + tableName + '&families=' + families + '&fileName=' + fileName,
    method: 'get'
  })
}

export function getSortList(paramsObj) { // 对比
  return request({
    url: '/caml-query/query/template/sort/' + paramsObj.tableName + '/' + paramsObj.column + '/' + paramsObj.key,
    method: 'get',
    params: {
      newDate: paramsObj.newDate,
      sort: paramsObj.sort,
      pageNum: paramsObj.pageNum,
      pageSize: paramsObj.pageSize
    }
  })
}

// export function getFileInfo(paramsObj) { // 查询是否生成成功文件
//   return request({
//     url: '/caml-hbase/query/template/importAll/' + paramsObj.tableName + '?newDate=' + paramsObj.newDate,
//     method: 'get'
//   })
// }

export function getQueryFileStatus(rk) { // 查询是否生成成功文件
  return request({
    url: '/caml-query/query/template/judgingCache/' + rk,
    method: 'get'
  })
}

export function getTabList(paramsObj) { // 校验是哪个行业所以需要后端返现tab
  return request({
    url: '/caml-query/query/template/get/navigation',
    method: 'post',
    data: paramsObj
  })
}

// export function isTabExport(paramsObj) { // 导出当前tab页，判断数据条数
//   return request({
//     url: '/caml-query/query/template/impl-all-tab',
//     method: 'post',
//     data: paramsObj
//   })
// }

export function continueExport(paramsObj) { // 导出当前tab页，判断数据条数，点击’是‘的情况调
  return request({
    url: '/caml-query/query/template/preserve/impl-all-tab',
    method: 'post',
    data: paramsObj
  })
}
