import React, { Component } from 'react';
import Whatsappchat from './whatsapp_chat' ;
import Whatsappchatlist from './whatsapp_chat_list';
import data from '../../assets/data';

class WhatsappMobile extends Component {
    state = { 
        chat:data.chatList[0],
    }

    changeChat(s){
        this.setState({chat:s});
    }
    render() { 
        return ( 
            <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
                <div style={{display:"flex",backgroundColor:"#128C7E",width:"100%",color:"white",justifyContent:"center",alignItems:"center",fontSize:"14px",padding:"3px"}}>Nagulan's Portfolio Website</div>
                <div className="non_header_window" style={{height:"calc(100% - 25px)"}}>
                    {
                        (this.state.chat.title==="Main")?<Whatsappchatlist changeChat={this.changeChat.bind(this)}/>:
                        <Whatsappchat chat={this.state.chat} changeChat={this.changeChat.bind(this)}/>
                    }
                </div>
            </div>
        );
    }
}
 
export default WhatsappMobile;



//