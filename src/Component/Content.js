import React from 'react'
import {Layout, Menu} from 'antd'


const { Header, Sider, Content } = Layout;


class Cont extends React.Component{
    render(){
        return(
            <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          </Content>
        );
    }
}

export default Cont;