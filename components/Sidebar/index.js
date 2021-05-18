import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import Sider from './sidebar.style';
import LibraryCard1 from '@graphics/libraryCard1.svg';
import DigitalTapeIcon1 from '@graphics/digitalTapeIcon1.svg';
import ClipChapter1 from '@graphics/clipChapters1.svg';
import Youtube1 from '@graphics/youtube1.svg';
import RightsHolder1 from '@graphics/rightsHolders1.svg';
import LicensingPortal1 from '@graphics/licensingPortal1.svg';

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
            <Icon component={ClipChapter1} />
            <span className="ant-menu-item-text">Profile</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon component={LibraryCard1} />
            <span className="ant-menu-item-text">Library Cards</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon component={DigitalTapeIcon1} />
            <span className="ant-menu-item-text">Digital Tapes</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon component={ClipChapter1} />
            <span className="ant-menu-item-text">Clip Chapters</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon component={Youtube1} />
            <span className="ant-menu-item-text">YouTube Copies</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon component={RightsHolder1} />
            <span className="ant-menu-item-text">Rights Holders</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon component={LicensingPortal1} className="has-stroke" />
            <span className="ant-menu-item-text">Licensing Portal</span>
          </Menu.Item>
        </Menu>
      </Sider>
  )
}
