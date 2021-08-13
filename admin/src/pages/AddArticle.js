import React, { useEffect, useState } from "react";
import marked from "marked";
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Button, Input, Row, Col, Select, DatePicker, Space, message } from "antd";
import "../style/AddArticle.css";
import axios from "axios";
import servicePath from "../config/apiUrl";
import moment from "moment";

const { Option } = Select;
const { TextArea } = Input;

function AddArticle(props) {
    const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState(""); //文章标题
    const [articleContent, setArticleContent] = useState(""); //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
    const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
    const [introduceHtml, setIntroduceHtml] = useState("等待编辑"); //简介的html内容
    const [showDate, setShowDate] = useState(moment()); //发布日期
    const [updateDate, setUpdateDate] = useState(); //修改日志的日期
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState([]);

    useEffect(() => {
        getTypes();
        let tmpId = props.match.params.id
        if(tmpId){
            setArticleId(tmpId)
            getArticleById(tmpId)
        } 
    }, []);
    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });
    const changeContent = (e) => {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    };

    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroduceHtml(html);
    };

    const getTypes = () => {
        axios({
            method: "get",
            url: servicePath.getTypes,
            withCredentials: true,
        }).then((res) => {
            if (res.data.data === "没有登录") {
                localStorage.removeItem("openId");
                props.history.push("/");
            } else {
                setTypes(res.data.data);
            }
        });
    };

    const getArticleById = (id) => {
        axios({
            method: "get",
            url: servicePath.getArticleById + id,
            withCredentials: true,
        }).then((res) => {
            if (res.data.data === "没有登录") {
                localStorage.removeItem("openId");
                props.history.push("/");
            } else {
                console.info(res.data.data[0]);
                const data = res.data.data[0]
                setArticleTitle(data.title)
                setArticleContent(data.content)
                
                let html = marked(data.content)
                setMarkdownContent(html)
                setIntroducemd(data.introduce)

                let introduceHtml = marked(data.introduce)
                setIntroduceHtml(introduceHtml)

                setShowDate(moment(data.createTime * 1000))
                setSelectedType(data.typeId)

            }
        });
    }

    const addArticle = () => {
        if (!selectedType) {
            message.error('请选择文章类型')
            return false
        }
        if (!articleTitle) {
            message.error('请填写文章标题')
            return false
        }
        if (!articleContent) {
            message.error('请填写文章内容')
            return false
        }
        if (!introduceHtml) {
            message.error('请填写文章简介')
            return false
        }
        const data = {
            title: articleTitle,
            content: articleContent,
            introduce: introducemd,
            'type_id': selectedType,
            'create_time': (showDate.valueOf())/ 1000
        }

        if (articleId === 0) {
            data['view_count'] = 0
            axios({
                method: 'post',
                url: servicePath.addArticle,
                data,
                withCredentials: true,
            }).then((res) => {
                if (res.data.data === "没有登录") {
                    localStorage.removeItem("openId");
                    props.history.push("/");
                } else {
                    setArticleId(res.data.id);
                    if (res.data.success) {
                        message.success('文章添加成功')
                    } else {
                        message.error('文章添加失败')
                    }
                }
            });

        } else {
            // data['view_count']++
            data.id = articleId
            axios({
                method: 'post',
                url: servicePath.updateArticle,
                data,
                withCredentials: true,
            }).then((res) => {
                if (res.data.data === "没有登录") {
                    localStorage.removeItem("openId");
                    props.history.push("/");
                } else {
                    if (res.data.success) {
                        message.success('文章更新成功')
                    } else {
                        message.error('文章更新失败')
                    }
                }
            });
        }
        
    }
    return (
        <Row gutter={5}>
            <Col span={18}>
                <Row gutter="10">
                    <Col span={20}>
                        <Input placeholder="博客标题" value={articleTitle} size="large" onChange={(e) => setArticleTitle(e.target.value)}/>
                    </Col>
                    <Col span={4}>
                        <Select defaultValue={selectedType} size="large"
                        style={{width: '100%'}}
                        value={selectedType}
                        onChange={(value) => setSelectedType(value)}
                        >
                            {types.map((item) => {
                                return (
                                    <Option value={item.id} key={item.id}>
                                        {item.type_name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Col>
                </Row>
                <br />
                <Row gutter="10">
                    <Col span={12}>
                        <TextArea
                            className="markdown-content"
                            rows={35}
                            value={articleContent}
                            placeholder="文章内容"
                            onChange={changeContent}
                            onPressEnter={changeContent}
                        />
                    </Col>
                    <Col span={12}>
                        <div
                            className="show-html"
                            dangerouslySetInnerHTML={{ __html: markdownContent }}
                        ></div>
                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Space>
                    <Button type="default">暂存文章</Button>
                    <Button type="primary" onClick={addArticle}>发布文章</Button>
                    <br />
                </Space>
                <TextArea
                    placeholder="文章简介"
                    rows={6}
                    value={introducemd}
                    onChange={changeIntroduce}
                    onPressEnter={changeIntroduce}
                />
                <br />
                <div
                    className="introduce-html"
                    dangerouslySetInnerHTML={{ __html: "文章简介：" + introduceHtml }}
                ></div>
                <br />
                <Row gutter="5">
                    <Col span="12">
                        <div className="date-select">
                            <DatePicker placeholder="发布日期"
                            value={showDate} onChange={(date, dateString) => setShowDate(date)} />
                        </div>
                    </Col>
                    <Col span="12">
                        <div className="date-select">
                            <DatePicker placeholder="修改日期" onChange={(date, dateString) => setUpdateDate(dateString)} />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AddArticle;
