import React from 'react'
import { DoubleRightOutlined } from "@ant-design/icons";
 const Table=()=> {
    const style={
        App: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
         
        table:{
            border:" 2px solid forestgreen",
            width:" 800px",
            height: "200px"
        },
         
        th: {
            borderBottom: '1px solid black',
        },
         
        td:{
            textAlign: 'center'
        }
    }
  return (
    <div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'50px',width:'92%',marginLeft:'80px'}}>
        <div style={{width:'48%',alignItems:'center',justifyContent:'center'}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'90%'}}>
         <h6 style={{fontSize:15,fontWeight:'bold'}}>LATEST TRANDER</h6> 
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div style={{width:'90%',backgroundColor:'#798478',marginTop:6,alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,alignSelf:'center',padding:'10px', }}>
        <table style={{width:'100%',justifyContent:'space-around' }}>
        <thead>
        <tr>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Time</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Client</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Script</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Type</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Lot</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Qty</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Rate</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Edit</th>
        </tr>
        </thead>
       
    </table>
    </div>
        </div>
        <div style={{width:'48%',alignSelf:'center'}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'90%'}}>
         <h6 style={{fontSize:15,fontWeight:'bold'}}>PENDING TRANDER</h6> 
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div style={{width:'90%',backgroundColor:'#798478',marginTop:"10px ",padding:'10px',alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,justifyContent:'space-around',alignSelf:'center' }}>
        <table style={{width:'100%',justifyContent:'space-around',alignSelf:'center' }}>
        <thead >
        {/* <tbody> */}
        <tr>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Time</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Client</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Script</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Type</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Lot</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Qty</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Rate</th>
            <th style={{color:'#fff',justifyContent:'center',alignItems:'center'}}>Edit</th>
        </tr>
        {/* </tbody> */}
        </thead>
       
    </table>
    </div>
        </div>
        </div>
    </div>
  )
}
export default Table
