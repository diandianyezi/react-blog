import React, { useEffect, useState } from 'react';
import { Modal, message, Table, Space, Button } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl';

const { confirm } = Modal

function ArticleList(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        getArticleList()
    }, [])
    const getArticleList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true
        })
            .then(res => {
                console.info(res.data.data)
                setList(res.data.data)
            })
    }
    const editItem = (id) => {
        props.history.push('/index/add/'+ id)
    }

    const deleteItem = (id) => {
        confirm({
            title: '确认要删除这篇文章吗？',
            content: '点击ok按钮，文章将永远删除，无法恢复',
            onOk() {
                axios({
                    url: servicePath.deleteArticle + id,
                    withCredentials: true
                }).then(res => {
                    message.success('文章删除成功')
                    getArticleList()
                })
            },
            onCancel() {
                message.success('文章没有任何变化')
            }
        })
        
    }

    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '类型',
          dataIndex: 'typeName',
          key: 'typeName',
        },
        {
          title: '发布时间',
          key: 'createTime',
          dataIndex: 'createTime'
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type="link" onClick={e => editItem(record.id)}>修改</Button>
              <Button type="link" onClick={e => deleteItem(record.id)}>删除</Button>
            </Space>
          ),
        },
      ];

    return (
        <div>
            <Table rowKeY='id' columns={columns} dataSource={list} />
        </div>
    )
}

export default ArticleList