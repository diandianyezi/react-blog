import { Avatar, Divider, Space } from 'antd'
import styles from './Author.module.scss'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {

    return (
        <div className={styles['author-div'] + ' ' + styles['comm-box']}>
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className={styles['author-intro']}>
                介绍
                <Divider>社交账号</Divider>
                <Space size="middle">
                    <Avatar size={28} icon={<GithubOutlined />} className={styles['account']} />
                    <Avatar size={28} icon={<QqOutlined />} className={styles['account']} />
                    <Avatar size={28} icon={<WechatOutlined />} className={styles['account']} />
                </Space>

            </div>
        </div>
    )

}

export default Author