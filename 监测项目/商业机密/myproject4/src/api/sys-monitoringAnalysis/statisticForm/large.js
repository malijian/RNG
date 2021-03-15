import request from '@/utils/request'

// 统计报表--大额
export function getList(form, pageInfo) { // 获取列表
  return request({
    url: 'monitor/large/transaction',
    method: 'get',
    params: {
      statisticalType: form.statisticalType,
      starStatisticalTime: form.statisticalTime[0],
      endStatisticalTime: form.statisticalTime[1],
      region: form.region,
      CustomerType: form.CustomerType,
      mechanismType: form.mechanismType,
      st: form.str,
      tsdr: form.tsdr,
      num: form.num,
      district: form.district,
      order: form.order,
      sort: form.sort,
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}

export function getSum(form, pageInfo) {
  return request({
    url: 'monitor/large/transaction/sum',
    method: 'get',
    params: {
      statisticalType: form.statisticalType,
      starStatisticalTime: form.statisticalTime[0],
      endStatisticalTime: form.statisticalTime[1],
      region: form.region,
      CustomerType: form.CustomerType,
      mechanismType: form.mechanismType,
      st: form.str,
      tsdr: form.tsdr,
      num: form.num,
      district: form.district,
      order: form.order,
      sort: form.sort,
      pageNum: pageInfo.pageNum,
      pageSize: pageInfo.pageSize
    }
  })
}

export function getCity() { // 获取列表
  return request({
    url: 'code-manage/codesys/district/tree/more',
    method: 'get'
  })
}

// export function getRinmList(category, area) { // 报告机构
//   return request({
//     url: 'receivesys/organization/selectOrgInfoByFicp1',
//     method: 'get',
//     params: {
//       id: category,
//       region: area
//     }
//   })
// }
// 义务机构名称
export function getRinmList(params) { // 报告机构
  return request({
    url: 'monitor/statistics/code/select-org',
    method: 'get',
    params
  })
}

// 机构类型
export function getIndustry() {
  return request({
    url: 'code-manage/codesys/organ-type/tree',
    method: 'get',
    params: {
    }
  })
}
// 机构类型一级
export function getIndustryFristXu() {
  return request({
    url: 'monitor/statistics/code/industry',
    method: 'get',
    params: {
      type: ''
    }
  })
}
// 机构类型一级
export function getIndustryFrist() {
  return request({
    url: 'monitor/codeDetail/info/industryForLarge',
    method: 'get',
    params: {
      type: ''
    }
  })
}
// 机构类型二级
export function getIndustrySecond(params) {
  return request({
    url: 'monitor/codeDetail/info/industryForLarge',
    method: 'get',
    params: params
  })
}
// 行政区划
// export function administrativeDivision() {
//   return request({
//     url: 'code-manage/codesys/district/province',
//     method: 'get',
//     params: {
//     }
//   })
// }

// 获取地区
export function administrativeDivision(params) {
  return request({
    url: 'monitor/statistics/code/select-dept',
    method: 'get',
    params
  })
}

// 批量导出
export function batchExport(form) {
  return request({
    url: 'monitor/large/transaction/export',
    method: 'get',
    params: {
      statisticalType: form.statisticalType,
      starStatisticalTime: form.statisticalTime[0],
      endStatisticalTime: form.statisticalTime[1],
      region: form.region,
      CustomerType: form.CustomerType,
      mechanismType: form.mechanismType,
      str: form.str,
      tsdr: form.tsdr,
      ids: form.ids
    }
  })
}

// 获取统计时间
export function endTimes(type) {
  return request({
    url: 'monitor/large/transaction/date/' + type,
    method: 'get'
  })
}
// 行政调查反显表单
export function getApply(applyId) {
  return request({
    url: 'monitor/thread/adm/getApply/' + applyId,
    method: 'get'
  })
}

export function getPermission() {
  return request({
    url: 'monitor/datapermission/item',
    method: 'get'
  })
}

export function outputLog(type) {
  return request({
    url: `monitor/large/transaction/log/${type}`,
    method: 'get'
  })
}
