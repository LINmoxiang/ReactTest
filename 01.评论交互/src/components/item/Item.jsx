import React from "react"
import './item.css'

export default class Item extends React.Component{
  del = () => {
    let {id,delComment} = this.props
    delComment(id)
  }

  render(){
    let {name,comment} = this.props
    return(
       <li className="list-group-item">
          <div className="handle">
            <a href="#1" onClick={this.del}>删除</a>
          </div>
          <p className="user"><span >{name}</span><span>说:</span></p>
          <p className="centence">{comment}</p>
        </li>
    )
  }
}