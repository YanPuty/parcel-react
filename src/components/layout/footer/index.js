import React from "react";
import { Layout, Divider, Icon, Badge } from "antd";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


const { Footer } = Layout;
import "./index.scss"


class FooterLayOut extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Footer className="bottomFooter">
                    <Row xs="12">
                        <Col md="3">
                            <b>ABOUT</b>
                        </Col>
                        <Col md="3">
                            <b>COMMUNITY</b>
                        </Col>
                        <Col md="3">
                            <b>HOST</b>
                        </Col>
                        <Col md="3">
                            <b>SUPPORT</b>
                        </Col>
                        <Col md="3">
                            Diversity & Belonging
                        </Col>
                        <Col md="3">
                            Airbnb Magazine
                        </Col>
                        <Col md="3">
                            Host your home
                        </Col>
                        <Col md="3">
                            Help Center
                        </Col>
                        <Col md="3">
                            Accessibility
                        </Col>
                        <Col md="3">
                            Airbnb Associates
                        </Col>
                        <Col md="3">
                            Host an experience
                        </Col>
                        <Col md="3">
                            Neighborhood Support
                        </Col>
                        <Col md="3">
                            Trust & Safety
                        </Col>
                        <Col md="3">
                            Airbnb for Work
                        </Col>
                        <Col md="3">
                            Responsible hosting
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                            Airbnb Citizen
                        </Col>
                        <Col md="3">
                            Invite friends
                        </Col>
                        <Col md="3">
                            Open Homes
                        </Col>
                        <Col md="3">
                            Newsroom
                        </Col>
                        <Col md="3">
                            Gift cards
                        </Col>
                        <Col md="3">
                            Olympics
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                        </Col>
                        <Col md="3">
                            Careers
                        </Col>
                        <Col md="3">
                            Resource Center
                        </Col>
                    </Row>
                    <Divider />
                    <div className="row">
                        <div className="col">
                            <p style={{ fontSize: "18px", width: "100%"}}>© 2020 Airbnb, Inc. All rights reserved
                                <Link to="" style={{ paddingLeft: "20px" }}> <Badge color="grey"/>Privacy</Link>
                                <Link to="" style={{ paddingLeft: "20px" }}><Badge color="grey"/>Terms</Link>
                                <Link to="" style={{ paddingLeft: "20px" }}><Badge color="grey"/>Sitemap</Link>
                            </p>
                        </div>
                        <div className="col">
                            <p style={{paddingLeft: "220px", width: "100%", marginLeft: "80px"}}>
                                <b >
                                    <Icon type="global" style={{ fontSize: "30px" }} />
                                    <span style={{ paddingLeft: "5px", fontSize: "18px" }}>English (US)</span>
                                </b>
                                <b style={{ paddingLeft: "20px" }}>
                                    <Icon type="dollar" style={{ fontSize: "30px" }} />
                                    <span style={{ paddingLeft: "5px", fontSize: "18px" }}>USD</span>
                                </b>
                                <b style={{ paddingLeft: "40px" }}>
                                    <Icon type="instagram" style={{ fontSize: "30px" }} />
                                </b>
                                <b style={{ paddingLeft: "20px" }}>
                                    <Icon type="facebook" style={{ fontSize: "30px" }} />
                                </b>
                            </p>
                        </div>
                    </div>
                </Footer>
            </React.Fragment>
        )
    }
}

export default FooterLayOut;