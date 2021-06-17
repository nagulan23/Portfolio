import React, { Component } from 'react';
import './whatsapp.css';
import WhatsappWeb from './whatsappWeb/whatsappweb';
import WhatsappMobile from './whatsappMobile/whatsappmobile';
import MediaQuery from 'react-responsive';

class Whatsapp extends Component {
    state = {  }
    render() { 
        return ( <>
            <MediaQuery minDeviceWidth={945}>
                    <WhatsappWeb/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={944} >
                <WhatsappMobile/>
            </MediaQuery>
            </>
        );
    }
}
 
export default Whatsapp;