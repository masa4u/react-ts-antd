import * as React from 'react';

import { Row, Col, Menu, Icon, Button } from 'antd';
const { SubMenu, ItemGroup } = Menu;
const ButtonGroup = Button.Group;

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="clearfix">
        <Row gutter={0}>
          <Col xs={24} sm={24} md={8} lg={5} xl={5}>
            <div className="logo" />
          </Col>
          <Col xs={0} sm={0} md={16} lg={19} xl={19}>
            <ButtonGroup className="btnGroup">
              <Button icon="github" />
              <Button icon="medium" />
              <Button icon="youtube" />
            </ButtonGroup>
            <Menu id="nav" className="menu-site" mode="horizontal">
              <Menu.Item key="mail">
                <Icon type="home" />Home
              </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="code" />Workshop
                  </span>
                }
              >
                <ItemGroup title="React / TypeScript Workshop">
                  <Menu.Item key="setting:1">개요</Menu.Item>
                  <Menu.Item key="setting:2">신청하기</Menu.Item>
                </ItemGroup>
                <ItemGroup title="Angular Workshop">
                  <Menu.Item key="setting:3">개요</Menu.Item>
                  <Menu.Item key="setting:4">지난 워크샵 영상 보기</Menu.Item>
                </ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="form" />Article
                  </span>
                }
              >
                <ItemGroup title="TypeScript" />
                <ItemGroup title="React" />
                <ItemGroup title="Angular" />
                <ItemGroup title="Electron" />
                <ItemGroup title="기타">
                  <Menu.Item key="etc:1">Prettier - Code Formatter</Menu.Item>
                  <Menu.Item key="etc:2">
                    Parcel - Web Application Bundler
                  </Menu.Item>
                </ItemGroup>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
