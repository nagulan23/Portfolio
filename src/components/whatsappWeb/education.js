import React, { Component } from 'react';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import data from '../../assets/data';
import DoneIcon from '@material-ui/icons/Done';

class Education extends Component {
    state = { 
        colors:["#d685ff","#6198ff","#ffb734"],
    }

    componentDidMount() {
        document.getElementById('edusChatWindow').scrollIntoView({ behavior: 'auto', block: 'end' });
    }

    componentDidUpdate() {
        document.getElementById('edusChatWindow').scrollIntoView({ behavior: 'auto', block: 'end' });
    }

    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div id="edusChatWindow" style={{width:"90%",margin:"5%",paddingBottom:"20px"}}>
                    {
                        data.education.map(item => {
                            return <>
                            <div style={{color:"lightgray",width:"100%",textAlign:"center",fontSize:"14px",marginBottom:"10px"}}>
                                <div style={{padding:"8px",borderRadius:"8px",backgroundColor:"#1e2b31",display:"inline"}}>
                                    {item.duration}
                                </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"40px"}}>
                                <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none",fontSize:"34px"}}/>
                                <div style={{backgroundColor:"#056063",borderRadius:"7px",padding:"5px",position:"relative",left:"-15px",top:"14px",borderTopLeftRadius:"0px"}}>
                                    <a className="onHoverUnderLine" href={item.link} style={{color:"#ffb734",fontWeight:"bold",paddingBottom:"10px",paddingLeft:"5px",paddingRight:"5px",paddingTop:"4px"}}>{item.title}</a>
                                    <div style={{padding:"8px",borderRadius:"5px",background:"#075050",color:"black",marginTop:"10px",borderLeft:"5px solid #6acbee"}}>
                                        <div style={{color:"#6acbee",fontWeight:"bold",fontSize:"14px",paddingBottom:"5px"}}>
                                            Degree
                                        </div>
                                        <div style={{color:"#b1b3b5", fontSize:"15px"}}>
                                            {item.degree}
                                        </div>
                                    </div>
                                    {
                                        item.content.map(ci => {
                                            return <div style={{color:"#d1d1d1", fontSize:"16px",fontWeight:"500",paddingLeft:"5px",paddingRight:"5px",paddingTop:"10px"}}>{ci}</div>
                                        })
                                    }
                                    <div style={{float:"right",color:"#d9d8da",fontSize:"12px"}}>{item.time}</div>
                                </div>
                            </div>
                            </>
                        })
                    }
                    {
                        (this.props.msgs.length!==0)?
                        <div>
                            <div style={{color:"lightgray",width:"100%",textAlign:"center",fontSize:"14px",marginBottom:"10px"}}>
                                <div style={{padding:"8px",borderRadius:"8px",backgroundColor:"#1e2b31",display:"inline"}}>
                                    TODAY
                                </div>
                            </div>
                            {
                                this.props.msgs.map(msg => {
                                    return <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"10px",float:"right",justifyContent:"end"}}>
                                        <div style={{backgroundColor:"#272d30",borderRadius:"7px",padding:"5px",position:"relative",right:"-15px",top:"14px",borderTopRightRadius:"0px"}}>
                                            <div style={{color:"#d1d1d1", fontSize:"16px",fontWeight:"500",padding:"5px"}}>{msg[0]}</div>
                                            <div style={{float:"right",color:"#b1b3b5",fontSize:"12px"}}>{msg[1]}  
                                                <span><DoneIcon style={{fontSize:"15px",paddingLeft:"2px",marginBottom:"-2px"}}/></span>
                                            </div>
                                        </div>
                                        <ArrowRightSharpIcon style={{transform: "rotate(-135deg)",color:"#272d30",margin:"0px",padding:"0px",border:"none",fontSize:"34px"}}/>
                                    </div>
                                })
                            }
                        </div>:
                        <div/>
                    }
                </div>
            </div>
        );
    }
}
 
export default Education;

/*

import React, { Component } from 'react';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import data from '../../assets/data';

class Education extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{width:"90%",margin:"5%",}}>
                    {
                        data.education.map(item => {
                            return <>
                            <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"50px"}}>
                                <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none"}}/>
                                <div style={{backgroundColor:"#056063",borderRadius:"5px",padding:"10px",position:"relative",left:"-10px",top:"10px",borderTopLeftRadius:"0px"}}>
                                    <div>
                                        <div style={{color:"#ffb734", fontSize:"20px",fontWeight:"bold",paddingBottom:"10px"}}>{item.contact}</div>
                                        <a href={item.link} style={{color:"lightgray", fontSize:"18px",fontWeight:"700",paddingBottom:"10px",textDecoration:"none"}}>{item.title}</a>
                                        <div style={{padding:"2px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",background:"#b1b3b5",color:"black",width:"fit-content",marginBottom:"5px",marginTop:"10px"}}>{item.degree}</div>
                                        {
                                            item.content.map(ci => {
                                                return <div style={{color:"#b1b3b5", fontSize:"18px",fontWeight:"600",padding:"5px"}}>{ci}</div>
                                            })
                                        }
                                        <div style={{float:"right",color:"#d9d8da",paddingTop:"10px"}}>{item.time}</div>
                                    </div>
                                </div>
                            </div>
                            </>
                        })
                    }
                    
                </div>
            </div>
        );
    }
}
 
export default Education;

*/