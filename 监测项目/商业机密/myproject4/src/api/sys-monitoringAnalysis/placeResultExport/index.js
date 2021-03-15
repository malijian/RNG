import request from '@/utils/request'
// 涉罪类型
export function getSheZui(typeId) {
  return request({
    url: 'code-manage/codesys/code-detail/detail/' + typeId,
    method: 'get'
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
// 查询信息
export function getListFor(params) {
  return request({
    url: '/monitor/areaAssist/list',
    method: 'get',
    params: params
  })
}
// 第一次查询信息
export function getList(params) {
  return request({
    url: '/monitor/areaAssist/list/forpage',
    method: 'get',
    params: params
  })
}
export function getInfoById(id) {
  return request({
    url: '/monitor/areaAssist/one/' + id,
    method: 'get'
  })
}
// 新增保存
export function newSave(params) {
  return request({
    url: '/monitor/areaAssist/create/two/add/save',
    method: 'post',
    data: params
  })
}
// 新增提交
export function newSubmit(params) {
  return request({
    url: '/monitor/areaAssist/create/two/add/submit',
    method: 'post',
    data: params
  })
}

// 修改保存
export function updateSave(params) {
  return request({
    url: '/monitor/areaAssist/create/two/update/save',
    method: 'post',
    data: params
  })
}
// 修改提交
export function updateSubmit(params) {
  return request({
    url: '/monitor/areaAssist/create/two/update/submit',
    method: 'post',
    data: params
  })
}
// 删除
export function deleteInfoById(id) {
  return request({
    url: '/monitor/areaAssist/' + id,
    method: 'delete'
  })
}
// 填写移送情况 修改
export function sendUpdate(params) {
  return request({
    url: '/monitor/areaAssist/update',
    method: 'put',
    data: params
  })
}

