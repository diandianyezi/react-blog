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
import 'markdown-navbar/dist/navbar.css';

export default function Home() {

    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'
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
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                        <div>
                            <div className={styles["detailed-title"]}>
                                React实战视频教程-技术胖Blog开发(更新08集)
                            </div>

                            <div className={styles["list-icon"] + '' + styles["center"]}>
                                <span className={styles['icon']}><CalendarOutlined /> 2019-06-28</span>
                                <span className={styles['icon']}><FolderOutlined /> 视频教程</span>
                                <span className={styles['icon']}><FireOutlined /> 5498人</span>
                            </div>

                            <div className={styles["detailed-content"]} >
                                <ReactMarkdown
                                    children={markdown}
                                    skipHtml={false}
                                />
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
                                source={markdown}
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
