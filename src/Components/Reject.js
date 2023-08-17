import React from 'react'
import { DoubleRightOutlined } from "@ant-design/icons";
const Reject=()=> {
 
  return (
    <div>
    <scroll>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',alignSelf:'center'}}>
        <div style={{width:'90%',alignSelf:'center',marginTop:"100px"}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'100%'}}>
     
         <h6 style={{fontSize:15}}>REJECT LOGS</h6> 
         <button style={{borderRadius:'25px',borderColor:'#A5CB1C',width:'10%',color:'#fff',backgroundColor:'#A5CB1C',marginLeft:'68%'}}>Allow</button>
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div style={{width:'100%',backgroundColor:'#798478',marginTop:6,alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,alignSelf:'center',padding:'10px', }}>
        <table style={{width:'100%',justifyContent:'space-around'}}>
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
        {/* ---------------------------- */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',alignSelf:'center',marginTop:'100px',marginLeft:'50px'}}>
        <div style={{width:'48%',alignSelf:'center'}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'90%'}}>
         <h6 style={{fontSize:15}}>M2M ALERT</h6> 
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div  style={{width:'90%',backgroundColor:'#798478',marginTop:6,alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,alignSelf:'center',padding:'10px', }} >
        <table style={{justifyContent:'space-around',width:'100%'}}>
        <thead >
        <tr>
            <th style={{color:'#fff'}}>Time</th>
            <th style={{color:'#fff'}}>Client</th>
            <th style={{color:'#fff'}}>Script</th>
            <th style={{color:'#fff'}}>Type</th>
            <th style={{color:'#fff'}}>Lot</th>
            <th style={{color:'#fff'}}>Qty</th>
            <th style={{color:'#fff'}}>Rate</th>
            <th style={{color:'#fff'}}>Edit</th>
        </tr>
        </thead>
       
    </table>
    </div>
        </div>
        <div style={{width:'48%',alignSelf:'center'}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'90%'}}>
         <h6 style={{fontSize:15}}>AUTO SQUARE OFF LIST</h6> 
         <button style={{borderRadius:'25px',borderColor:'#A5CB1C',width:'20%',color:'#fff',backgroundColor:'#A5CB1C',marginLeft:'30%',}}>Allow</button>
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div style={{width:'90%',backgroundColor:'#798478',marginTop:6,alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,alignSelf:'center',padding:'10px',}}>
        <table style={{justifyContent:'space-around',width:'100%'}}>
        <thead >
        {/* <tbody> */}
        <tr>
            <th style={{color:'#fff'}}>Time</th>
            <th style={{color:'#fff'}}>Client</th>
            <th style={{color:'#fff'}}>Script</th>
            <th style={{color:'#fff'}}>Type</th>
            <th style={{color:'#fff'}}>Lot</th>
            <th style={{color:'#fff'}}>Qty</th>
            <th style={{color:'#fff'}}>Rate</th>
            <th style={{color:'#fff'}}>Edit</th>
        </tr>
        {/* </tbody> */}
        </thead>
       
    </table>
    </div>
        </div>
        </div>
        {/* ------------------------------------------ */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',alignSelf:'center'}}>
        <div style={{width:'90%',alignSelf:'center',marginTop:"100px",minHeight:'200px'}}>
        <div style={{justifyContent:'space-between',display:'flex',width:'100%'}}>
     
         <h6 style={{fontSize:15}}>M2M SUMMARY</h6> 
         <button style={{borderRadius:'25px',borderColor:'#A5CB1C',width:'10%',color:'#fff',backgroundColor:'#A5CB1C',marginLeft:'68%'}}>Allow</button>
         <a style={{color:'#A5CB1C'}}>Viewmore <DoubleRightOutlined /></a>  
        </div>
        <div style={{width:'100%',backgroundColor:'#798478',marginTop:6,alignItems:'center',borderTopRightRadius:5,borderTopLeftRadius:5,alignSelf:'center',padding:'10px', }}>
        <table style={{width:'100%',justifyContent:'space-around',alignItems:'center',marginLeft:'50px'}}>
        <thead>
        {/* <tbody> */}
        <tr>
            <th style={{color:'#fff'}}>BROKER/CLIENT</th>
            <th style={{color:'#fff'}}>DEPOSIT+LEDGER</th>
            <th style={{color:'#fff'}}>M2M</th>
            <th style={{color:'#fff'}}>CHANGE(%)</th>
        </tr>
        {/* </tbody> */}
        </thead>
       
    </table>
    </div>
        </div>
       
        </div>
        </scroll>
    </div>
  )
}

export default Reject;