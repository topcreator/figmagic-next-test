import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import Sider from './sidebar.style';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = v => {
    setCollapsed(v);
  }

  return (
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="desktop" />
            <span className="ant-menu-item-text">Profile</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span className="ant-menu-item-text">Library Cards</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file" />
            <span className="ant-menu-item-text">Digital Tapes</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="file" />
            <span className="ant-menu-item-text">Clip Chapters</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="file" />
            <span className="ant-menu-item-text">YouTube Copies</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="file" />
            <span className="ant-menu-item-text">Rights Holders</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="file" />
            <span className="ant-menu-item-text">Licensing Portal</span>
          </Menu.Item>
        </Menu>
      </Sider>
  )
}
