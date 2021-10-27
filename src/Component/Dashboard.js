import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';



class Dashboard extends React.Component {

  state={
    coutries:[],
    global:[],
    currentDate:null,
    loading:true,
  }
  async componentDidMount(){
    const resp1=await axios.get('https://api.covid19api.com/summary');
    this.setState({
      coutries:resp1.data.Global,
    });
    this.setState({loading:false});
  }

  render(){
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return(
        <div className="site-card-wrapper">
          <h4>GLOBALLY COVID19 TRACKER</h4>
        <Row gutter={16}>
          <Col span={8}>
            <Card className="card" title="New Confirmed" bordered={false}>
             <p className="p1"> {this.state.coutries.NewConfirmed} </p>          
             </Card>
          </Col>
          <Col span={8}>
            <Card className="card" title="New Death" bordered={false}>
            <p className="p1"> {this.state.coutries.NewDeaths} </p>       
            </Card>
          </Col>
          <Col span={8}>
            <Card className="card" title="New Recovery" bordered={false}>
              <p className="p1"> {this.state.coutries.NewRecovered} </p>          
              </Card>
          </Col>
        </Row>
<br />
        <Row gutter={16}>
          <Col span={8}>
            <Card className="card" title="Total Confirmed" bordered={false}>
             <p className="p1"> {this.state.coutries.TotalConfirmed} </p>            
             </Card>
          </Col>
          <Col span={8}>
            <Card className="card" title="Total Death" bordered={false}>
            <p className="p1"> {this.state.coutries.TotalDeaths}</p>         
            </Card>
          </Col>
          <Col span={8}>
            <Card className="card" title="Total Recovery" bordered={false}>
              <p className="p1"> {this.state.coutries.TotalRecovered} </p>            
              </Card>
          </Col>
        </Row>
      </div> 
    );
}
  
}


export default Dashboard;