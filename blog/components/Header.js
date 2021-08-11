import React, { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import { Row, Col, Menu } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import * as Icon from '@ant-design/icons'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArr, setNavArr] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(res => {
                return res.data.data
            })
            setNavArr(result)
        }
        fetchData()
    }, [])

    //跳转到列表页
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/myList?id=' + e.key)
        }
    }
    return (
        <div className={styles.header}>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={styles['header-logo']}>婷婷</span>
                    <span className={styles['header-txt']}>前端fe</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <Icon.HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArr.map(({id, icon, type_name}) => {
                                const TagIcon = Icon[icon]
                                return (
                                    <Menu.Item key={id}>
                                        <TagIcon />
                                        {type_name}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header