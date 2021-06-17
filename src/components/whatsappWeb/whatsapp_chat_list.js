import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import {MoreHoriz} from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import data from '../../assets/data';
import { IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

class Whatsapp_chat_list extends Component {
    state = { 
        chat:"Home",
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
            <div style={{width:"30%",minWidth:"500px",backgroundColor:"#131c21",height:"100%",borderRight:"1px solid #5f6769"}}>
                <div style={{backgroundColor:"#2a2e33",display:"flex",flexDirection:"row",padding:"10px",justifyContent:"space-between",alignItems:"center"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Avatar style={{height:"50px",width:"50px"}} src="data:image/jpeg;base64,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"/>
                        <div style={{marginLeft:"10px",color:"#b1b3b5",fontFamily:" 'Pacifico', cursive",fontSize:"25px"}}>{"<  Nagulan S  />"}</div>
                    </div>
                    <MoreHoriz style={{fontSize:"40px",color:"#b1b3b5"}} />
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                    <IconButton onClick={()=>window.open("https://www.linkedin.com/in/nagulan-s/")}>
                        <LinkedInIcon className="socialmedia_icon" style={{fontSize:"35px"}}/>
                    </IconButton>
                    <IconButton onClick={()=>window.open("https://github.com/nagulan23")}>
                        <GitHubIcon className="socialmedia_icon" style={{fontSize:"35px"}}/>
                    </IconButton>
                    <IconButton onClick={()=>window.open("https://twitter.com/nagulan_s")}>
                        <TwitterIcon className="socialmedia_icon" style={{fontSize:"35px"}}/>
                    </IconButton>
                </div>
                <div style={{width:"100%",height:"1px",backgroundColor:"#5f6769"}}/>
                <div style={{overflowY:"auto",position:"relative",height:"calc(100% - 150px)"}} className="scroll2">
                {
                    data.chatList.map(item => {
                        return <>
                            <div className="chat_tile" key={item.title} style={{backgroundColor:(this.state.chat===item.title)?"#2d3035":""}} onClick={this.changePage.bind(this,item)}>
                                <Avatar style={{height:"70px",width:"70px"}} src={item.icon}/>
                                <div style={{display:"flex",flexDirection:"column",marginLeft:"20px",color:"#b1b3b5"}}>
                                    <div style={{fontSize:"20px",fontWeight:"500"}}>{item.title}</div>
                                    <div style={{fontSize:"15px"}}>{item.sub}</div>
                                </div>
                            </div>
                            {(item.title==="Contact me")?<div/>:<div className="chat_divider"/>}
                        </>
                    })
                }
                <div style={{textAlign:"center"}}>
                    <WhatsAppIcon style={{color:"#b1b3b5",fontSize:"60px",}}/>
                </div>                
                <div style={{color:"#b1b3b5", fontFamily:"'Baloo Tammudu 2', cursive",fontSize:"20px",textAlign:"center"}}> A WhatsApp themed Portfolio</div>
                </div>
            </div>
         );
    }
}
 
export default Whatsapp_chat_list;