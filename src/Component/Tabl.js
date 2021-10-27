import React from 'react'
import axios from 'axios'
import {Table} from 'antd';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
   
  },
  {
    title: 'NewConfirm',
    dataIndex: 'newcon',
   
  },
  {
    title: 'NewDeath',
    dataIndex: 'newdeat',
  
  },
  {
    title: 'Code',
    dataIndex: 'code',
  
  },
  
];


      
class Tabl extends React.Component{

  state={
    coutries:[],
    global:[],
    currentDate:null,
    loading:true,
  }
  

  
  async componentDidMount(){
    const resp=await axios.get('https://api.covid19api.com/summary');
    console.log(resp);

  
    this.setState({
      coutries:resp.data.Countries,
    });
    this.setState({loading:false});
  }
  render(){
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const list = this.state.global;
    const looso= this.state.coutries.map((Countries) => ( <p>{Countries.Country}</p> ));
    const newConf= this.state.coutries.map((Count) => ( <p>{Count.NewConfirmed}</p> ));
    const newDeat= this.state.coutries.map((Count) => ( <p>{Count.NewDeaths}</p> ));
    const keyss= this.state.coutries.map((Count) => ( <p>{Count.ID}</p> ));
    const code= this.state.coutries.map((Count) => ( <p>{Count.CountryCode}</p> ));
    const data = [
      {
       name: looso,
       newcon: newConf,
       newdeat:newDeat,
       code:code,
        
      },    
      ];    
    
  
      
    
    
    return(
      <div className="site-card-wrapper">
        
       
      <Table columns={columns} dataSource={data} size="small" />
      
             
           

      
    </div> 
    
    )
    
  }
  
}



export default Tabl;