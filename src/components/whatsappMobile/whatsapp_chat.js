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
import BGM from "../../assets/doodle-bgm.png";

class Whatsapp_chat extends Component {
    state={
        heart:false,
        ptext:"",
        extext:"",
        edtext:"",
        stext:"",
        atext:"",
        ctext:"",
        pMSG:[],
        exMSG:[],
        edMSG:[],
        sMSG:[],
        aMSG:[],
        cMSG:[]
    }

    onChange(e){
        (this.props.chat.title==="Projects")? this.setState({ptext:e.target.value}):
        (this.props.chat.title==="Experience")? this.setState({extext:e.target.value}):
        (this.props.chat.title==="Education")? this.setState({edtext:e.target.value}):
        (this.props.chat.title==="Skills")? this.setState({stext:e.target.value}):
        (this.props.chat.title==="Achievements")? this.setState({atext:e.target.value}):
        this.setState({ctext:e.target.value});
    }

    onSend(){
        var currentdate = new Date(); 
        var hour=currentdate.getHours();
        var min=currentdate.getMinutes();
        var time="";
        if(hour>12)
            time=(hour-12)+":"+min+" PM";
        else
            time=hour+":"+min+" AM";
        (this.props.chat.title==="Projects")? this.state.pMSG.push([this.state.ptext,time]):
        (this.props.chat.title==="Experience")? this.state.exMSG.push([this.state.extext,time]):
        (this.props.chat.title==="Education")? this.state.edMSG.push([this.state.edtext,time]):
        (this.props.chat.title==="Skills")? this.state.sMSG.push([this.state.stext,time]):
        (this.props.chat.title==="Achievements")? this.state.aMSG.push([this.state.atext,time]):
        this.state.cMSG.push([this.state.ctext,time]);

        (this.props.chat.title==="Projects")? this.setState({ptext:""}):
        (this.props.chat.title==="Experience")? this.setState({extext:""}):
        (this.props.chat.title==="Education")? this.setState({edtext:""}):
        (this.props.chat.title==="Skills")? this.setState({stext:""}):
        (this.props.chat.title==="Achievements")? this.setState({atext:""}):
        this.setState({ctext:""});
    }

    onPressEnter(event){
        event.preventDefault();
        if(event.keyCode === 13){ 
            this.onSend();
        }
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
                <div className="chat_window scroll2" style={{ backgroundImage:`url(${BGM})`}} >
                    {
                        (this.props.chat.title==="Home")?<Home/>:
                        (this.props.chat.title==="Projects")?<Projects msgs={this.state.pMSG} />:
                        (this.props.chat.title==="Experience")?<Work msgs={this.state.exMSG}/>:
                        (this.props.chat.title==="Education")?<Education msgs={this.state.edMSG} />:
                        (this.props.chat.title==="Skills")?<Skills msgs={this.state.sMSG} />:
                        (this.props.chat.title==="Achievements")?<Achievements msgs={this.state.aMSG} />:
                        <Contact msgs={this.state.cMSG} />
                    }
                </div>
                {
                    (this.props.chat.title==="Home")?
                    <div style={{justifyContent:"center",fontSize:"13px",height:"50px",display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#2a2e33",width:"100%",color:"#b1b3b5"}}>
                        Only <span style={{color:"#34b6f0",cursor:"pointer"}}> &#160;admins&#160; </span> can send messages
                    </div>
                    :
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#2a2e33",width:"100%"}}>
                        <div style={{position:"absolute",marginLeft:"-15px"}}>
                            <Heart  isClick={this.state.heart} onClick={() => this.setState({heart:!this.state.heart})}/>
                        </div>
                        <AttachFileIcon style={{transform: "rotateZ(-45deg)",color:"#b1b3b5",fontSize:"28px",padding:"10px",marginLeft:"55px"}} className="rotate_45_icons"/>
                        <div className="Input" style={{width:"100%"}}>
                            <input
                                onKeyUp={e => this.onPressEnter(e)}
                                onChange={e => this.onChange(e)}
                                value={ 
                                    (this.props.chat.title==="Projects")? this.state.ptext:
                                    (this.props.chat.title==="Experience")? this.state.extext:
                                    (this.props.chat.title==="Education")? this.state.edtext:
                                    (this.props.chat.title==="Skills")? this.state.stext:
                                    (this.props.chat.title==="Achievements")? this.state.atext:
                                    this.state.ctext
                                }
                                type="text"
                                placeholder=" Type of message"
                                style={{width:"calc(100% - 20px)",dispaly:"flex",backgroundColor:"#33383b",border:"none",padding:"10px",paddingLeft:"15px",borderRadius:"20px",outline:"none",color:"white",fontSize:"15px"}}
                            />
                        </div>
                        <SendIcon onClick={this.onSend.bind(this)} style={{cursor:"pointer",color:"#b1b3b5",fontSize:"28px",padding:"10px"}}/>
                    </div>
                }
            </div>
        );
    }
}
 
export default Whatsapp_chat;



/*
                   
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
*/
