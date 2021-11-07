import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import {MoreHoriz} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import data from '../../assets/data';
import { IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import profile from '../../assets/profile.jpg';

class Whatsapp_chat_list extends Component {
    state = { 
        chat:"Home",
        title:"",
        subtitle:"",
        icon:"",
        socialMediaTabOpen: true
    }

    changePage(s){
        this.setState({chat:s.title});
        this.setState({title:s.sub});
        this.setState({subtitle:s.icon});
        this.props.changeChat(s);
    }
    render() { 
        return ( 
            <div style={{width:"30%",minWidth:"400px",backgroundColor:"#131c21",height:"100%",borderRight:"1px solid #5f6769"}}>
                <div style={{backgroundColor:"#2a2e33",display:"flex",flexDirection:"row",padding:"10px",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Avatar style={{height:"50px",width:"50px"}} src={profile}/>
                        <div style={{marginLeft:"10px",color:"#b1b3b5",fontFamily:" 'Pacifico', cursive",fontSize:"20px"}}>{"<  Nagulan S  />"}</div>
                    </div>
                    <IconButton onClick={()=>this.setState({socialMediaTabOpen:!this.state.socialMediaTabOpen})} style={{padding:"0px"}}>
                        <MoreHoriz style={{fontSize:"40px",color:"#b1b3b5"}} />
                    </IconButton>
                </div>
                {   (this.state.socialMediaTabOpen)?
                    <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around",backgroundImage: "linear-gradient(to right, #8a0a2a, #400b76)"}}>
                        <IconButton onClick={()=>window.open("https://www.linkedin.com/in/nagulan-s/")} >
                            <LinkedInIcon className="socialmedia_icon" style={{fontSize:"20px"}}/>
                        </IconButton>
                        <IconButton onClick={()=>window.open("https://github.com/nagulan23")}>
                            <GitHubIcon className="socialmedia_icon" style={{fontSize:"20px"}}/>
                        </IconButton>
                        <IconButton onClick={()=>window.open("https://twitter.com/nagulan_s")}>
                            <TwitterIcon className="socialmedia_icon" style={{fontSize:"20px"}}/>
                        </IconButton>
                    </div>:
                    <div style={{width:"100%",height:"1px",backgroundColor:"#121c20"}}/>
                }
                <div style={{overflowY:"auto",position:"relative",height:(this.state.socialMediaTabOpen)?"calc(100% - 115px)":"calc(100% - 75px)"}} className="scroll2">
                {
                    data.chatList.map(item => {
                        return <>
                            <div className="chat_tile" key={item.title} style={{backgroundColor:(this.state.chat===item.title)?"#2d3035":""}} onClick={this.changePage.bind(this,item)}>
                                    <Avatar style={{height:"60px",width:"60px"}} src={item.icon}/>
                                    <div style={{display:"flex",flexDirection:"column",marginLeft:"20px",color:"#b1b3b5"}}>
                                        <div style={{fontSize:"20px",fontWeight:"500"}}>{item.title}</div>
                                        <div style={{fontSize:"15px"}}>{item.sub}</div>
                                    </div>
                            </div>
                            {(item.title==="Contact me")?<div/>:<div className="chat_divider"/>}
                        </>
                    })
                }
                <div style={{backgroundImage: "linear-gradient(to right, #8a0a2a, #400b76)"}}>
                    <div style={{width:"100%", height:"50px",backgroundImage: "linear-gradient(to bottom, #121c20, rgba(255,0,0,0))"}}>

                    </div>
                    <div style={{textAlign:"center"}}>
                        <WhatsAppIcon style={{color:"#b1b3b5",fontSize:"60px",}}/>
                    </div>                
                    <div style={{color:"#b1b3b5", fontFamily:"'Baloo Tammudu 2', cursive",fontSize:"20px",textAlign:"center"}}> A WhatsApp themed Portfolio 2.0</div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Whatsapp_chat_list;