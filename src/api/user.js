import request from '@/utils/request'
// import Qs from 'qs' 

export function login() {
  return request({
    url: '/login',
    method: 'get',
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function toHome(data){
  return request({
    url:'/home',
    method: 'post',
    data,
  })
}