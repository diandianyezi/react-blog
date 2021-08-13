import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
} from "@ant-design/icons";
import "../style/AdminIndex.css";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";
import Dashboard from './Dashboard'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    // const handleClick = e => {
    //     if(e.key === 'addArticle') {
    //         props.history.push('/index/add')
    //     } else if(e.key === 'articleList') {
    //         props.history.push('/index/list')
    //     }
    // }
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <NavLink to="/index/dash" >工作台</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理">
                        <Menu.Item key="addArticle">
                            <NavLink to="/index/add" >增加文章</NavLink>
                        </Menu.Item>
                        <Menu.Item key="articleList">
                            <NavLink to="/index/list" >文章列表</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        留言管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360 }}
                    >
                        <div>
                            <Switch>
                                <Route path="/index/dash" exact component={Dashboard} />
                                <Route path="/index/add/:id" exact component={AddArticle} />
                                <Route path="/index/add" exact component={AddArticle} />
                                <Route path="/index/list/" exact component={ArticleList} />
                            </Switch>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Blog @2021 Created by Ting
                </Footer>
            </Layout>
        </Layout>
    );
}

export default AdminIndex;
