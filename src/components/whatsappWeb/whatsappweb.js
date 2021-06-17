import React, { Component } from 'react';
import Whatsappchat from './whatsapp_chat' ;
import Whatsappchatlist from './whatsapp_chat_list';
import data from '../../assets/data';

class WhatsappWeb extends Component {
    state = { 
        chat:data.chatList[0],
    }

    changeChat(s){
        this.setState({chat:s});
    }
    render() { 
        return ( 
            <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
                <div style={{height:"30px",backgroundColor:"#128C7E",width:"100%",color:"white",textAlign:"center",fontWeight:"500"}}>Nagulan's Portfolio Website</div>
                <div className="non_header_window">
                    <Whatsappchatlist changeChat={this.changeChat.bind(this)}/>
                    <Whatsappchat chat={this.state.chat}/>
                </div>
            </div>
        );
    }
}
 
export default WhatsappWeb;