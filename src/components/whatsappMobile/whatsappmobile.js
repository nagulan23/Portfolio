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
                <div style={{display:"flex",height:"30px",backgroundColor:"#128C7E",width:"100%",color:"white",justifyContent:"center",fontWeight:"500",alignItems:"center"}}>Nagulan's Portfolio Website</div>
                <div className="non_header_window">
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