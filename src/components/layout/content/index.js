import React from "react";
import { Layout, Icon, Card, Carousel } from 'antd';
import { Row, Col } from "reactstrap";
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
                    <div className="contentWrapper">
                        <div className="textWrapper">
                            <Row>
                                <Col xs="6" sm="4">
                                    <h1 style={{ fontSize: "22px", color: "#222222", paddingTop: "25px" }}>Airbnb Experiences are vetted for quality</h1>
                                </Col>
                                <Col>
                                    <Icon type="user" style={{ paddingRight: "100%" }} />
                                    <b>Local experts</b>
                                    <p>Led by locals who love where they’re from and what they do.</p>
                                </Col>
                                <Col>
                                    <Icon type="team" style={{ paddingRight: "100%" }} />
                                    <b>Small groups</b>
                                    <p>With intimate group sizes, you’ll never get lost in the crowd.</p>
                                </Col>
                                <Col>
                                    <Icon type="trademark" style={{ paddingRight: "100%" }} />
                                    <b>High standards</b>
                                    <p>Every experience is reviewed for unique access.</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="contentText">
                        <h3 style={{ fontSize: "22px", paddingBottom: " 10px" }}>Experiences in other cities</h3>
                        <Carousel style={{ width: "auto", height: "auto" }}>
                            <div>
                                <Row>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="Paris"/>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="London"/>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="New York"/>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="Los Angeles"/>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="Tokyo"/>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className="cardCarousel"
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{ borderRadius: "18px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}/>}
                                        >
                                            <Meta title="Mexico"/>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Card title="Card Title">
                                    Card Content 2
                                    </Card>
                            </div>
                            <div>
                                <Card title="Card Title">
                                    Card Content 3
                                    </Card>
                            </div>
                            <div>
                                <Card title="Card Title">
                                    Card Content 4
                                    </Card>
                            </div>
                        </Carousel>
                    </div>
                    <div className="contentText">
                        <h3 style={{ fontSize: "22px", paddingBottom: " 10px" }}>Experiences for every interest</h3>
                        <Row>
                            <Col>
                                <div className="box">
                                    <p>Art and culture</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <p>Entertainment</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <p>Food and drink</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <p>Nature</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="box">
                                    <p>Sports</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </React.Fragment>
        )
    }

}