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
            <div style={{display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"}}>
                <div style={{margin:"5%"}}>
                    <iframe width="560" height="315"  src="https://www.youtube-nocookie.com/embed/g8K21P8CoeI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div style={{marginLeft:"5%",marginRight:"5%"}}>
                    <div style={{color:"#b1b3b5",fontSize:"18px",fontWeight:"500",marginBottom:"10px",textAlign:"center"}}>A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner seeking an entry-level position to gain knowledge and experience in Software Development, Machine Learning, Data Science, and related areas, enabling the deployment of relevant skills resulting in mutual growth</div>
                </div>
                <div style={{marginLeft:"5%",marginRight:"5%"}}>
                    <a style={{marginRight:"10px"}} href="https://drive.google.com/uc?id=1Vq-NLHgCend0CkAUP33XgwK0cYZ_Zgu0&export=download">
                        <div className="resume-buttom" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px",marginBottom:"30px"}} >Download CV</div>
                    </a>
                    <a href="https://drive.google.com/file/d/1Vq-NLHgCend0CkAUP33XgwK0cYZ_Zgu0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="resume-buttom" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px",marginBottom:"30px"}} >View CV</div>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Aboutme;