import React,{Component} from 'react';
import {SignIn} from '../containers/SignIn';
import {CreateAnAccount} from '../containers/CreateAnAccount';
class Volunteer extends Component{
    constructor(props){
        super(props)
        this.state={a:'blanket3'}
    }
    click=()=>{
        if(this.state.a==='blanket1'|| this.state.a==='blanket3')
        this.setState({a:'blanket2'},()=>{
            setTimeout(()=>{this.setState({a:'blanket4'})},1950)
        })
        else if(this.state.a==='blanket2'|| this.state.a==='blanket4')
        this.setState({a:'blanket1'},()=>{
            setTimeout(()=>{this.setState({a:'blanket3'})},1950)
        })
    }
    render(){
        return(<div className='container'>
                <div className='Volunteer-div'>
                    <SignIn />
                    <CreateAnAccount/>
                </div>
                <div className={`${this.state.a}`} >
                    <button onClick={this.click}>Click</button>
                </div>
            </div>
        )
    }
}
export default Volunteer;