import React,{Component} from 'react'
import {Route,Redirect,NavLink,Switch} from "react-router-dom";
import HomeNews from './home_news'
import HomeMessage from "./home_message";

export default class Home extends Component{
  render(){
    return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="/home/news" activeClassName='demo'>News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/message" activeClassName='demo'>Message</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={HomeNews}></Route>
          <Route path='/home/message' component={HomeMessage}></Route>
          <Redirect to='/home/news'></Redirect>
        </Switch>
      </div>
    </div>
    )
  }
}