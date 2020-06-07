import React from "react";
import { Layout, Divider } from 'antd';
import PropTypes from "prop-types";
import { Narbar } from "./navbar";
import { Contents } from "./content";
import FooterLayOut from "./footer";


class LayoutComponent extends React.Component {

    render() {

        return (
            <Layout style={{ height: "100%", backgroundColor: "#fff" }}>
                <Narbar/>
                <Divider/>
                <Contents/>
                <FooterLayOut/>
            </Layout>
        );
    }
}

LayoutComponent.propTypes = {
    menu: PropTypes.object,
    children: PropTypes.node,
};

export default LayoutComponent;