import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import Home from './home';
import Aboutme from './aboutme';
import Projects from './projects';
import Education from './education';
import Skills from './skills';
import Achievements from './achievements'
import Work from './work';
import Contact from './contact';
import Heart from "react-animated-heart";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { IconButton } from '@material-ui/core';

class Whatsapp_chat extends Component {
    state={
        text:"",
        heart:false
    }

    onChange(e){
        this.setState({text:e.target.value});
    }

    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"#2a2e33"}}>
                    <div style={{display:"flex",flexDirection:"row",padding:"0px",paddingLeft:"0px",alignItems:"center",width:"calc(100% - 48px)"}}>
                        <IconButton onClick={()=>this.props.changeChat({title:"Main"})}>
                            <ArrowBackIcon style={{color:"#b1b3b5",fontSize:"28px"}}/>
                        </IconButton>
                        <Avatar style={{height:"40px",width:"40px"}} src={this.props.chat.icon}/>
                        <div style={{display:"flex",flexDirection:"column",marginLeft:"20px",color:"#b1b3b5",width:"calc(100% - 112px)"}}>
                            <div style={{fontSize:"18px",fontWeight:"500",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{this.props.chat.title}</div>
                            <div style={{fontSize:"13px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{this.props.chat.sub}</div>
                        </div>
                    </div>
                    <MoreHoriz style={{color:"#b1b3b5",fontSize:"28px",padding:"6px"}}/>
                </div>
                <div className="chat_window scroll2" >
                    { (this.props.chat.title==="Home")?<Home/>:
                      (this.props.chat.title==="About me")?<Aboutme/>:
                      (this.props.chat.title==="Projects")?<Projects/>:
                      (this.props.chat.title==="Experience")?<Work/>:
                      (this.props.chat.title==="Education")?<Education/>:
                      (this.props.chat.title==="Skills")?<Skills/>:
                      (this.props.chat.title==="Achievements")?<Achievements/>:
                        <Contact />
                    }
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#2a2e33",width:"100%"}}>
                    <div style={{position:"absolute",marginLeft:"-15px"}} className="heart-icon">
                        <Heart  isClick={this.state.heart} onClick={() => this.setState({heart:!this.state.heart})}/>
                    </div>
                    <AttachFileIcon style={{color:"#b1b3b5",fontSize:"28px",padding:"10px",marginLeft:"55px"}} className="rotate_45_icons"/>
                    <div className="Input" style={{width:"100%"}}>
                        <form >
                            <input
                                onChange={e => this.onChange(e)}
                                value={this.state.text}
                                type="text"
                                placeholder="Type of message"
                                style={{width:"calc(100% - 20px)",dispaly:"flex",backgroundColor:"#33383b",border:"none",padding:"10px",borderRadius:"20px",outline:"none",color:"#b1b3b5",fontSize:"15px"}}
                            />
                        </form>
                    </div>
                    <SendIcon style={{color:"#b1b3b5",fontSize:"28px",padding:"10px"}}/>
                </div>
            </div>
        );
    }
}
 
export default Whatsapp_chat;



/*
                    <FavoriteOutlinedIcon style={{color:"#b1b3b5",fontSize:"28px",padding:"15px"}}/>
*/
