/*
 * @Description: file information
 * @Author: enjoyjavapan
 * @Date: 2020-10-12 21:15:46
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-10-12 21:22:19
 */
import { find, assign } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1' }
]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({

    /**
     * 获取用户列表
     * @param {Object} query
     */
  SYSMGR_USER_LIST (query = {}) {
    // 模拟数据
    mock
      .onAny('/sysmgr/users')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
          : tools.responseError({}, '账号或密码不正确')
      })
    // 接口请求
    return requestForMock({
      url: '/sysmgr/users',
      method: 'post',
      query
    })
  }
})
