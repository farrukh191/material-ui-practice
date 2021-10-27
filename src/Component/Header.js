import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';


const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];


const Header =()=>{
  return(
    <div className="site-page-header-ghost-wrapper">
   <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
  />

    
  </div>
);

}
export default Header;