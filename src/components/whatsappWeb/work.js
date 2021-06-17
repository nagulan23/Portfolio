import React, { Component } from 'react';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';


class Work extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{width:"90%",margin:"5%",}}>
                    <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"50px"}}>
                        <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none"}}/>
                        <div style={{backgroundColor:"#056063",borderRadius:"5px",padding:"10px",position:"relative",left:"-10px",top:"10px",borderTopLeftRadius:"0px"}}>
                            <div>
                                <div style={{color:"#ffb734", fontSize:"20px",fontWeight:"bold",paddingBottom:"10px"}}>Internship</div>
                                <a href="https://stacknation.org/" style={{color:"lightgray", fontSize:"18px",fontWeight:"700",paddingBottom:"10px",textDecoration:"none"}}>Stack Nation, Information Technology & Services</a>
                                <div style={{padding:"2px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",background:"#b1b3b5",color:"black",width:"fit-content",marginBottom:"5px",marginTop:"10px"}}>Mobile Application Developer based on Flutter</div>
                                <div style={{color:"#b1b3b5", fontSize:"18px",fontWeight:"600",}}>Developed User Interface using Flutter & Implemented Backend with REST APIs for multiple Mobile Applications.</div>
                                <div style={{color:"#b1b3b5", fontSize:"18px",fontWeight:"600",}}>Developed Application: <a href="https://play.google.com/store/apps/details?id=com.jaketa.herody" style={{color:"lightskyblue"}}>https://play.google.com/store/apps/details?id=com.jaketa.herody</a></div>

                                <div style={{float:"right",color:"#d9d8da",paddingTop:"10px"}}>April 2020 - June 2020</div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"50px"}}>
                        <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none"}}/>
                        <div style={{backgroundColor:"#056063",borderRadius:"5px",padding:"10px",position:"relative",left:"-10px",top:"10px",borderTopLeftRadius:"0px"}}>
                            <div>
                                <div style={{color:"#ffb734", fontSize:"20px",fontWeight:"bold",paddingBottom:"10px"}}>Experience</div>
                                <a href="https://www.linkedin.com/company/codechef-amrita-cbe-chapter/" style={{color:"lightgray", fontSize:"18px",fontWeight:"700",paddingBottom:"10px",textDecoration:"none"}}>CodeChef Amrita Coimbatore Chapter</a>
                                <div style={{padding:"2px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",background:"#b1b3b5",color:"black",width:"fit-content",marginBottom:"5px",marginTop:"10px"}}>Event Lead - Core team</div>
                                <div style={{color:"#b1b3b5", fontSize:"18px",fontWeight:"600",}}>Coding community of our college, associated with CodeChef, aimed at developing the coding culture among the students</div>
                                <div style={{float:"right",color:"#d9d8da",paddingTop:"10px"}}>October 2020 - Present</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Work;