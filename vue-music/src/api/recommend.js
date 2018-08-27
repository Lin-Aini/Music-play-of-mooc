import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import fetch from '@/utils/ajax'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    uin: 0
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/musicList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    picmid: 1,
    rnd: Math.random(),
    // jsonpCallback: 'getPlaylist',
    loginUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return fetch({
    url: url,
    method: 'GET',
    params: data
  })
}
