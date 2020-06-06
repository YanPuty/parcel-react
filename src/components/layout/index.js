import React from "react";
import { Layout } from 'antd';
import PropTypes from "prop-types";
import { Narbar } from "./navbar";
import { Contents } from "./content";


class LayoutComponent extends React.Component {

    render() {

        return (
            <Layout style={{ height: 100 }}>
                <Narbar/>
                <Contents/>
            </Layout>
        );
    }
}

LayoutComponent.propTypes = {
    menu: PropTypes.object,
    children: PropTypes.node,
};

export default LayoutComponent;