import React from 'react'
import { DashboardOutlined, EyeOutlined, FileTextOutlined, FallOutlined, RiseOutlined, DatabaseOutlined,SettingOutlined } from "@ant-design/icons";
// import {BiUserCircle} from 'react-icons'
const Content = () => {
    const style = {
        ul: {
            list: "none",
            margin: 0,
            padding: "20px 0",
            backgroundColor: '#798478',
            alignItems:'center',
            justifyContent:'center'
        },
    }
    return (
        <div>
            <div style={style.ul}>
                <ul style={{ display: "flex", alignItems: 'center', listStyleType: 'none', justifyContent: 'space-around', margin:0}}>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff'}}><DashboardOutlined />Dashboard </li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff'}}><EyeOutlined />Market Watch</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff' }}><FileTextOutlined /> Summary Report</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff' }}><RiseOutlined /> Trading</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff' }}> Users</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff' }}><DatabaseOutlined /> Utities</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff' }}><DashboardOutlined />Accounts</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff'}}><DashboardOutlined />Reports</li>
                    <li style={{ alignItems: 'center', display: 'flex',color:'#fff'}}><SettingOutlined />Setting</li>
                </ul>
            </div>
        </div>
    )
}

export default Content