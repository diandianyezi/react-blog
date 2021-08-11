import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button, Spin } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import '../style/Login.css'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
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