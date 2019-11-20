import React,{Component} from "react";

export default class HomeMessageDetail extends Component{
  state = {
    detail:[
      {id:1,title:'鸡汤1',content:'优越感只是种心态，并不代表你真的比别人好。'},
      {id:2,title:'鸡汤2',content:'这世界上有各种各样的人，恰巧我们成为了朋友，这不是缘分，只仅仅是我们本就应该是朋友'},
      {id:3,title:'鸡汤3',content:'The world is full of lonely people waiting to make the first move 【世界上孤独的人都害怕迈出第一步】'}
    ]
  }
  render(){
    let {id} = this.props.match.params
    let {detail} = this.state
    let detailMessage = detail.find((item)=>{
      return item.id === id*1
    })
    return(
      <ul>
        <li>ID:{detailMessage.id}</li>
        <li>标题：{detailMessage.title}</li>
        <li>内容：{detailMessage.content}</li>
      </ul>
    )
  }
}