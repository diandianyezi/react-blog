import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import { CalendarOutlined, FireOutlined, FolderOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../styles/Detail.module.scss'
import MarkNav from 'markdown-navbar';
import axios from 'axios'
import 'markdown-navbar/dist/navbar.css';
import servicePath from '../config/apiUrl'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Detail = (res) => {
    const [detail, setDetail] = useState(res)
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        highlight: function(code) {
            return highlight.highlightAuto(code)
        }
    })
    let html = marked(detail.content)
    return (
        <>
            <Head>
                <title>详细页</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div>
                        <div className={styles["bread-div"]}>
                            <Breadcrumb>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>{detail.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className={styles["detailed-title"]}>
                                { detail.title }
                            </div>

                            <div className={styles["list-icon"] + '' + styles["center"]}>
                                <span className={styles['icon']}><CalendarOutlined /> { detail.createTime} </span>
                                <span className={styles['icon']}><FolderOutlined /> { detail.typeName } </span>
                                <span className={styles['icon']}><FireOutlined /> { detail.viewCount }人</span>
                            </div>

                            <div className={styles["detailed-content"]}
                            dangerouslySetInnerHTML={{__html:html}}>
                                {/* <ReactMarkdown
                                    children={markdown}
                                    skipHtml={false}
                                /> */}
                                
                            </div>
                        </div>

                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className={styles['detailed-nav']}>
                            <div className={styles["nav-title"]}>文章目录</div>
                            <MarkNav
                                className={styles["article-menu"]}
                                source={html}
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

Detail.getInitialProps = async(context) => {
    const { id } = context.query
    console.info(id)
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleById + id)
        .then(res => {
            console.info('data', res.data.data[0])
            resolve(res.data.data[0])
        })
    })

    return await promise
}


export default Detail