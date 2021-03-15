import request from '@/utils/request'
// 获取举报预处理
export function warehousingIn(pageNum, pageSize) {
  return request({
    url: '/monitor/fill-report/select-un-storage',
    method: 'get',
    params: {
      pageNum: pageNum,
      pageSize: pageSize
    }
  })
}
// 举报入库
export function reIncoming(id) {
  return request({
    url: '/monitor/fill-report/' + id,
    method: 'PATCH'
  })
}

export function refresh() {
  return request({
    url: '/monitor/fill-report/syncReport',
    method: 'get'
  })
}
