import React from "react"
import Item from "../item/Item.jsx"
import './list.css'

export default class List extends React.Component{
  render(){
    let {data,delComment} = this.props
    return(
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            data.map((item)=>{
              return <Item key={item.id} {...item} delComment={delComment}/>
            })
          }
        </ul>
      </div>
    )
  }
}