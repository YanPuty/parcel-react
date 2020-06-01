import React, { Fragment } from "react";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends React.Component {

    render() {
        const { collapsed } = this.props
        return (
            <Fragment>
                <Sider collapsible collapsed={collapsed} >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" >
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" >
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" />
                    </Menu>
                </Sider>
            </Fragment>
        );
    }
}

SideBar.propTypes = {
    collapsed: PropTypes.bool,
}

export default SideBar;