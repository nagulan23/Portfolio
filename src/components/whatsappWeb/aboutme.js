import React, { Component } from 'react';

class Aboutme extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{display:"flex",flexDirection:"column",height:"100%",width:"100%",alignItems:"center"}}>
                <div style={{margin:"5%"}}>
                </div>
                <div style={{marginLeft:"15%",marginRight:"15%"}}>
                    <div style={{color:"#b1b3b5",fontSize:"18px",fontWeight:"500",marginBottom:"10px",textAlign:"center"}}>A diligent, dedicated, creative budding engineer with a positive attitude: An enthusiastic learner seeking an entry-level position to gain knowledge and experience in Software Development, Machine Learning, Data Science, and related areas, enabling the deployment of relevant skills resulting in mutual growth</div>
                </div>
                <div style={{marginLeft:"5%",marginRight:"5%"}}>
                    <a style={{marginRight:"10px"}} href="https://drive.google.com/uc?id=1Vq-NLHgCend0CkAUP33XgwK0cYZ_Zgu0&export=download">
                        <div className="resume-buttom" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px",marginBottom:"30px"}} >Download CV</div>
                    </a>
                    <a href="https://drive.google.com/file/d/1Vq-NLHgCend0CkAUP33XgwK0cYZ_Zgu0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="resume-buttom" style={{marginTop:"20px",paddingLeft:"20px",paddingRight:"20px",marginBottom:"30px"}} >View CV</div>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Aboutme;