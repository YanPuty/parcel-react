import React from "react";
import { Layout } from 'antd';
import { Row, Col, Card } from "reactstrap";
import "antd/dist/antd.css";

import "./index.scss";

const { Content } = Layout;

const { Meta } = Card;

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
                            <span style={{ color: "#484848", fontSize: "46px" }}>One-of-a-kind activities hosted by experts</span>
                        </div>
                    </div>
                    <div className="cardBox">
                        <div>
                            <div style={{ color: "#222222", fontSize: "22px", paddingTop: "50px" }}>Introducing Online Experiences</div>
                            <div style={{ color: "#222222", fontSize: "16px" }}>Unique activities we can do together, led by a world of hosts.</div>
                        </div>
                    </div>
                    <div className="boxWrapper">
                        <div className="insideBoxWrapper">
                            <div className="textBoxWrapper">
                                <h6>In-person experiences paused in some regions due to COVID-19</h6>
                                <p>To protect the health and safety of our community, in-person Airbnb Experiences are paused in many locations through June 14, 2020. Visit the Help Center for the latest updates before you book.
                                    <span><u><b>Learn more</b></u></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Content>
            </React.Fragment>
        )
    }

}