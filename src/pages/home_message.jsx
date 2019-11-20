import React,{Component} from 'react'
import {Route,NavLink} from "react-router-dom";
import HomeMessageDetail from "./home_message-detail";

export default class HomeMessage extends Component{
  state = {
    message:[
      {id:1,title:'信息1'},
      {id:2,title:'信息2'},
      {id:3,title:'信息3'}
    ]
  }

  push = (id)=>{
    this.props.history.push(`/home/message/${id}`)
  }

  replace = (id)=>{
    this.props.history.replace(`/home/message/${id}`)
  }

  go = ()=>{
    this.props.history.goForward()
  }

  back = ()=>{
    this.props.history.goBack()
  }

  render(){
    let {message} = this.state
    console.log(this)
    return (        
        <div>
          <ul>
            {
              message.map((item)=>{
                return(
                <li key={item.id}>
                  <NavLink to={`/home/message/${item.id}`}>{item.title}</NavLink>&nbsp;&nbsp;
                  <button onClick={()=>{this.push(item.id)}}>push查看</button>&nbsp;&nbsp;
                  <button onClick={()=>{this.replace(item.id)}}>replace查看</button>
                </li>
                )
              })
            }
          </ul>
          <button onClick={this.back}>回退</button>&nbsp;&nbsp;
          <button onClick={this.go}>前进</button>
          <hr/>
          <Route path='/home/message/:id' component={HomeMessageDetail}></Route>
        </div>
    )
  }
}