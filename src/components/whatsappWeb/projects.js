import React, { Component } from 'react';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import data from '../../assets/data';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
                <div style={{width:"90%",margin:"5%",}}>
                    {
                        data.projects.map(item => {
                            return <>
                            <div style={{display:"flex",flexDirection:"row",width:"75%",marginBottom:"50px"}}>
                                <ArrowRightSharpIcon className="rotate_-45_icons" style={{color:"#056063",margin:"0px",padding:"0px",border:"none"}}/>
                                <div style={{backgroundColor:"#056063",borderRadius:"5px",padding:"10px",position:"relative",left:"-10px",top:"10px",borderTopLeftRadius:"0px"}}>
                                    <div>
                                        <div style={{color:"#ffb734", fontSize:"20px",fontWeight:"bold",paddingBottom:"10px"}}>{item.contact}</div>
                                        <a href={item.link} style={{color:"lightgray", fontSize:"18px",fontWeight:"700",paddingBottom:"10px",textDecoration:"none"}}>{item.title}</a>
                                        <div style={{padding:"2px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",background:"#b1b3b5",color:"black",width:"fit-content",marginBottom:"5px",marginTop:"10px"}}>{item.stacks}</div>
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
 
export default Projects;