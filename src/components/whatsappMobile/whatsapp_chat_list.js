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
        chat:"Main",
        title:"",
        subtitle:"",
        icon:"",
    }

    changePage(s){
        this.setState({chat:s.title});
        this.setState({title:s.sub});
        this.setState({subtitle:s.icon});
        this.props.changeChat(s);
    }
    render() { 
        return ( 
            <div style={{width:"100%",backgroundColor:"#131c21",height:"100%",borderRight:"1px solid #5f6769"}}>
                <div style={{backgroundColor:"#2a2e33",display:"flex",flexDirection:"row",padding:"6px",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Avatar style={{height:"40px",width:"40px",}} src={profile}/>
                        <div style={{marginLeft:"10px",color:"#b1b3b5",fontFamily:" 'Pacifico', cursive",fontSize:"20px"}}>{"<  Nagulan S  />"}</div>
                    </div>
                    <MoreHoriz style={{fontSize:"28px",color:"#b1b3b5"}} />
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                    <IconButton onClick={()=>window.open("https://www.linkedin.com/in/nagulan-s/")}>
                        <LinkedInIcon className="socialmedia_icon" style={{fontSize:"25px"}}/>
                    </IconButton>
                    <IconButton onClick={()=>window.open("https://github.com/nagulan23")}>
                        <GitHubIcon className="socialmedia_icon" style={{fontSize:"25px"}}/>
                    </IconButton>
                    <IconButton onClick={()=>window.open("https://twitter.com/nagulan_s")}>
                        <TwitterIcon className="socialmedia_icon" style={{fontSize:"25px"}}/>
                    </IconButton>
                </div>
                <div style={{width:"100%",height:"1px",backgroundColor:"#5f6769"}}/>
                <div style={{overflowY:"auto",position:"relative",height:"calc(100% - 102px)"}} className="scroll2">
                {
                    data.chatList.map(item => {
                        return <>
                            <div className="chat_tile" key={item.title} style={{backgroundColor:(this.state.chat===item.title)?"#2d3035":""}} onClick={this.changePage.bind(this,item)}>
                                <Avatar style={{height:"60px",width:"60px"}} src={item.icon}/>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"20px",color:"#b1b3b5",width:"calc(100% - 104px)"}}>
                                    <div style={{fontSize:"20px",fontWeight:"500"}}>{item.title}</div>
                                    <div style={{fontSize:"15px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{item.sub}</div>
                                </div>
                            </div>
                            {(item.title==="Contact me")?<div/>:<div className="chat_divider"/>}
                        </>
                    })
                }
                <div style={{textAlign:"center"}}>
                    <WhatsAppIcon style={{color:"#b1b3b5",fontSize:"40px",}}/>
                </div>                
                <div style={{color:"#b1b3b5", fontFamily:"'Baloo Tammudu 2', cursive",fontSize:"15px",textAlign:"center"}}> A WhatsApp themed Portfolio</div>
                </div>
            </div>
         );
    }
}
 
export default Whatsapp_chat_list;