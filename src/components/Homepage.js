import React,{ Component } from "react";
import {bindActionCreators} from 'redux';
import ChatBot from "react-simple-chatbot";
import { Searchbar } from "../containers/Searchbar";
import { ThemeProvider } from 'styled-components';
class Homepage extends Component{
     
    render(){
        const steps=[
            {
                id: '0',
                message: "helloworld",
                trigger: '1'
            },
            {
                id: '1',
                user:true,
                trigger:"3"
              },
              {
                id:"3",
                message: 'Hi {previousValue}, fuck you!',
                trigger:"1"
              }
        ];
        return(
            <div>
                <Searchbar/>
                <div>
                    <h2>&nbsp;&nbsp;Frequently Asked Questions...</h2>
                </div>
                <div>
                <ThemeProvider theme={{ background: '#f5f8fb',
  
  headerBgColor: '#0086c4',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0086c4',
  botFontColor: '#fff',
  userBubbleColor: '#ccc8c8',
  userFontColor: '#000000',}}>
                    <ChatBot steps={steps} floating={true} floatingStyle={{backgroundColor:"rgba(0, 134, 196, 0.966)"}} />
               </ThemeProvider>
                </div>
            </div>
        )
    }
}
export default Homepage;