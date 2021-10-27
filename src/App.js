import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Typography, Avatar, Menu, Breadcrumb, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from './Component/per.png';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Contact from './Component/Contact';
import Tabl from './Component/Tabl';
import Dashboard from './Component/Dashboard';


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

class App extends React.Component {
  render() {
    return (
      <div className="App">


<Router>
                             
                   {/* <Route exact path="/" component={Home} />
                   <Route path="/About" component={About} />
                   <Route path="/Contact" component={Contact} /> */}


                


        <Layout>
        <Header style={{background:'black', color:'white', padding:'10px'}}>
          <Avatar style={{float:'right'}} size="large" src={logo} /> 
              <Title style={{color:'white'}} level={3}>Farrukh Feroz</Title>
        </Header>
         
          <Layout>
          <Sider style={{color:'black'}}>
            <Menu  
            defaultSelectedKeys={['Dashboard']}
            mode='inline'
            >
              
              <Menu.Item key='Dashboard' > 
              Dashboard
                   
              </Menu.Item>
      
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.ItemGroup title='About us'>
                <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
                </Menu.ItemGroup>
            
          </SubMenu>
              <Menu.Item key='Home' icon={<MailOutlined />}> 
                  <Link className='link' to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item key='Table' icon={<MailOutlined />}> 
                  <Link className='link' to="Table"> Table</Link>
              </Menu.Item>
              <Menu.Item key='Contact Us' icon={<MailOutlined />}> 
                  <Link className='link' to="Contact"> Contact Us</Link>
              </Menu.Item>
              

              
            </Menu>
          </Sider>
          <Layout>
         
          <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
         
      <Route exact path="/" ><div className="site-layout-content"><Dashboard /> </div></Route>
      <Route path="/Table" ><div className="site-layout-content"><Tabl /> </div></Route>
      <Route path="/Contact" ><div className="site-layout-content"><Contact name='farrukh Contact' /></div></Route>
      
    </Content>

            <Footer style={{background:'black', color:'white'}}>Footer</Footer>
          </Layout>
          </Layout>
        </Layout>
        
 
               </Router>

      </div>
    );
  }
}

export default App;