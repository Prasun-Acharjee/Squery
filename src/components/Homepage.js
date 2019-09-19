import React,{ Component } from "react";
import {bindActionCreators} from 'redux';
import ChatBot from "react-simple-chatbot";
import { Searchbar } from "../containers/Searchbar";
class Homepage extends Component{
     
    render(){
        const steps=[
            {
                id: '0',
                message: `${user.message}`,
                trigger: '1'
            },
            {
                id: '1',
                user:true,
                trigger:"3"
              },
              {
                id:"3",
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
              }
        ];
        return(
            <div>
                <Searchbar/>
                <div>
                    <h2>&nbsp;&nbsp;Frequently Asked Questions...</h2>
                </div>
                <div>
                    <ChatBot steps={steps}/>
                </div>
            </div>
        )
    }
}
export default Homepage;