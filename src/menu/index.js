/*
 * @Date: 2020-10-12 14:19:11
 * @Author: enjoyjavapan
 * @LastEditors: enjoyjavapan
 * @LastEditTime: 2020-11-18 17:19:49
 * @Description: 描述文件作用
 * @FilePath: \d2-admin-start-kit\src\menu\index.js
 */
import {uniqueId} from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
    return menu.map(e => ({
        ...e,
        path: e.path || uniqueId('d2-menu-empty-'),
        ...(e.children
            ? {
                  children: supplementPath(e.children)
              }
            : {})
    }))
}

export const menuHeader = supplementPath([
    {path: '/index', title: '首页', icon: 'home'},
    {
        title: '系统管理',
        icon: 'folder-o',
        children: [
            {path: '/sysmgr-usermgr', title: '用户管理'},
            {path: '/sysmgr-rolemgr', title: '角色管理'}
        ]
    }
])

export const menuAside = supplementPath([
    {path: '/index', title: '首页', icon: 'home'},
    {
        title: '系统管理',
        icon: 'folder-o',
        children: [
            {path: '/sysmgr-usermgr', title: '用户管理'},
            {path: '/sysmgr-rolemgr', title: '角色管理'}
        ]
    }
])
