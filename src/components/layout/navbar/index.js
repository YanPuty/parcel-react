import React from "react";
import { Layout, Menu, Button, Icon, Dropdown } from 'antd';
import styled from "styled-components";


import logo from "../../../styles/images/logo.png";

import "./index.scss"

const { Header } = Layout;

const Image = styled.img`
  width: 90px;
  height: 90px;
  margin-left: 40px;
`;

export class Narbar extends React.Component {

    render() {
    
        const menu = (
          <Menu>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              <Icon type="global" style={{ marginRight: "10px" }}/>English(US)
              </a>
            </Menu.Item>
            <Menu.Item>
              <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
              <Icon type="dollar" style={{ marginRight: "10px" }}/>USD
              </a>
            </Menu.Item>
          </Menu>
        );

        return (
            <React.Fragment>
                <Header className="header">
                    <div className="logo">
                        <Image src={logo}/>
                        <Button size="large" type="default" style={{ marginLeft: "25%"}}>Add a location</Button>
                        <Button size="large" type="default">Add Date</Button>
                        <Button size="large" type="default" icon="search" style={{ marginRight: "20%"}}/>
                        <Button type="link" shape="round" size="large" style={{ color: "black", paddingLeft: "120px" }}>
                            <Icon type="global"/>
                        </Button>
                        <Button type="link" shape="round" size="large" style={{ color: "black", paddingLeft: "20px" }}>
                        Help
                        </Button>
                        <Button type="default" shape="round" size="default" style={{ color: "black", paddingLeft: "20px" }}>
                        Sign Up
                        </Button>
                    </div>
                </Header>
            </React.Fragment>
        )
    }

}