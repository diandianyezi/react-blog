import React from 'react';
// import marked from 'marked'
// import highligntjs from 'hightlight.js'
import { Button, Input, Row, Col, Select, DatePicker, Space } from 'antd'
import '../style/AddArticle.css'
import axios from 'axios';
import servicePath from '../config/apiUrl';

const { Option } = Select
const { TextArea } = Input

function AddArticle(list) {
    console.info(list)
    return (
        <Row gutter={5}>
            <Col span={18}>
                <Row gutter="10">
                    <Col span={20}>
                        <Input
                            placeholder="博客标题"
                            size="large"
                        />
                    </Col>
                    <Col span={4}>
                        <Select defaultValue="1" size="large">
                            <Option value="1">视频教程</Option>
                            <Option value="2">逼逼叨</Option>
                            <Option value="3">快乐生活</Option>
                        </Select>
                    </Col>
                </Row>
                <br />
                <Row gutter="10">
                    <Col span={12}>
                        <TextArea
                            className="markdown-content"
                            rows={35}
                            placeholder="文章内容"
                        />
                    </Col>
                    <Col span={12}>
                        <div className="show-html">
                            预览内容
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Space>
                    <Button type="default">暂存文章</Button>
                    <Button type="primary">发布文章</Button>
                </Space>
                <TextArea placeholder="文章简介" rows={6} />
                <div className="introduce-html">文章简介预览</div>
                <Row gutter="5">
                    <Col span="12">
                        <DatePicker placeholder="发布日期" />
                    </Col>
                    <Col span="12">
                        <DatePicker placeholder="修改日期"/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

AddArticle.getInitialPops = async () => {
    const promise = new Promise(resolve => {
        axios(servicePath.getTypes)
        .then(res => {
            console.info('ressss', res)
        })
    })

    return await promise
}
export default AddArticle