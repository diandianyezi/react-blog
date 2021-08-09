import React, { Component } from 'react'
import styles from './Header.module.scss'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'

const Header = () => {
    // render() {
        return (
            <div className={styles.header}>
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className={styles['header-logo']}>婷婷</span>
                        <span className={styles['header-txt']}>前端fe</span>
                    </Col>
                    <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu mode="horizontal">
                            <Menu.Item key="home">
                                {/* <Icon type="home" /> */}
                                <HomeOutlined />
                                首页
                            </Menu.Item>
                            <Menu.Item key="video">
                                {/* <Icon type="youtube" /> */}
                                <YoutubeOutlined />
                                视频
                            </Menu.Item>
                            <Menu.Item key="life">
                                {/* <Icon type="smile" /> */}
                                <SmileOutlined />
                                生活
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    // }
}

export default Header