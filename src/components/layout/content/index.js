import React from "react";
import { Layout } from 'antd';
import "./index.scss";

const { Content } = Layout;

export class Contents extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Content
                    className="site-layout-background"
                    style={{
                    marginTop: "24px",
                    paddingTop: 24,
                    }}
                >
                    <div className=" text-primary contentText">
                        AIRBNB EXPERIENCES
                        <div>
                            <span style= {{ color: "#484848", fontSize: "46px" }}>One-of-a-kind activities hosted by experts</span>
                        </div>
                        <div>
                            <div style = {{ color: "#222222", fontSize: "22px", paddingTop: "50px" }}>Introducing Online Experiences</div>
                            <div style = {{ color: "#222222", fontSize: "16px" }}>Unique activities we can do together, led by a world of hosts.</div>
                        </div>
                    </div>
                </Content>
            </React.Fragment>
        )
    }

}