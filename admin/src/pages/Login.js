import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button, Spin, message } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import '../style/Login.css'
import servicePath from '../config/apiUrl';
import axios from 'axios';

function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = () => {
        setIsLoading(true)
        if (!userName) {
            message.error('用户名不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
            return false
        } else if (!password) {
            message.error('密码不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
            return false
        }

        let data = {
            userName,
            password
        }

        axios({
            url: servicePath.checkLogin,
            method: 'post',
            data,
            withCredentials: true,
        }).then(res => {
            console.info(res)
            setIsLoading(false)
            if (res.data.data === 1) {
                message.success(res.data.message)
                localStorage.setItem('openId', res.data.openId)
                props.history.push('/index')
            } else {
                message.error('用户名密码错误!')
            }
        }, error => {
            message.error('登录出错了', error)
            setIsLoading(false)
        })
    }
    return (
        <div className='login-div'>
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="blog system" bordered style={{
                    width: 400,
                }}>
                    <Input
                        id="username"
                        size="large"
                        placeholder="用户名"
                        prefix={<UserOutlined />}
                        style={{
                            marginBottom: 24,
                        }}
                        onChange={(e) => setUserName(e.target.value)} />
                    <br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="密码"
                        prefix={<KeyOutlined />} 
                        onChange={(e) => setPassword(e.target.value)} />
                </Card>
                <br/>

                <Button type="primary" size="large" block onClick={checkLogin}>登录</Button>
            </Spin>
        </div>
    )
}

export default Login