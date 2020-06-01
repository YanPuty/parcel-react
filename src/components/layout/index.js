import React from "react";
import { Layout } from 'antd';
import PropTypes from "prop-types";
import SideBar from "./sidebar";


const { Header, Content, Footer } = Layout;


class LayoutComponent extends React.Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const { children } = this.props;
        const { collapsed } = this.state;

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideBar
                    collapsed={collapsed}
                />
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                    <Footer className="text-center p-3">
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

LayoutComponent.propTypes = {
    menu: PropTypes.object,
    children: PropTypes.node,
};

export default LayoutComponent;