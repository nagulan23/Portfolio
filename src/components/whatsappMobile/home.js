import React, { Component } from 'react';
import profile from '../../assets/profile.jpg';
import { Avatar } from '@material-ui/core';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import CakeIcon from '@material-ui/icons/Cake';

class Aboutme extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",}}>
                <div style={{width:"50%",height:"0px",paddingBottom:"50%",borderRadius:"50%",background:"#171d20",margin:"5%",boxShadow:"inset -6px -6px 38px red, inset 6px 6px 38px blue"}}>
                    <Avatar style={{width:"90%",height:"auto",margin:"5%"}} src={profile}/>
                </div>
                <div style={{margin:"5%"}}>
                    <div style={{display:"flex",flexDirection:"row",paddingBottom:"5px"}}>
                        <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none"}}/>
                        <div style={{backgroundColor:"#056063",borderRadius:"5px",padding:"5px",position:"relative",left:"-10px",top:"10px",borderTopLeftRadius:"0px"}}>
                            <div style={{color:"#b1b3b5", fontSize:"18px",fontWeight:"bold"}}>Hi, I'm</div>
                        </div>
                    </div>
                    <div style={{marginLeft:"10px",marginTop:"10px"}}>
                        <div style={{color:"#b1b3b5",fontSize:"25px",fontWeight:"bold"}}>NAGULAN S</div>
                        <div style={{color:"#34b6f0",fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}}>Passionate Full Stack Developer</div>
                        <div style={{color:"#b1b3b5",fontSize:"17px",fontWeight:"bold",fontFamily: "'Patrick Hand', cursive",marginBottom:"30px"}}>" A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner gaining knowledge and experience in Software Development, Machine Learning, Data Science, and related areas"</div>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <EmailIcon style={{color:"#b1b3b5"}}/>
                            <div style={{color:"#b1b3b5",marginLeft:"10px",marginBottom:"10px"}}> nagulan1645@gmail.com</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <LocationOnIcon style={{color:"#b1b3b5"}}/>
                            <div style={{color:"#b1b3b5",marginLeft:"10px",marginBottom:"10px"}}> Madurai, Tamil Nadu, India</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <CallIcon style={{color:"#b1b3b5"}}/>
                            <div style={{color:"#b1b3b5",marginLeft:"10px",marginBottom:"10px"}}>+91 8695775599</div>
                        </div>
                        <div style={{display:"flex",flexDirection:"row"}}>
                            <CakeIcon style={{color:"#b1b3b5"}}/>
                            <div style={{color:"#b1b3b5",marginLeft:"10px",marginBottom:"10px"}}>23/12/2000</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Aboutme;