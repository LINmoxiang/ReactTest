import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component{
  
  search = ()=>{
    let {update} = this.props
    //获取用户输入信息
    let keyValue = this.refs.search.value
    //输入框不能为空(校验数据)
    if(!keyValue.trim()){
      alert('输入框不能为空')
      return
    }
    //请求数据地址
    const URL = `https://api.github.com/search/users?q=${keyValue}`

    update(
      {
        users:[],
        isFirst:false,
        isLoading:true,
        error:''
      }
    )
    //发送请求
    axios.get(URL)
     .then((value)=>{
        update({
          users:value.data.items,
          isFirst:false,
          isLoading:false,
          error:''
        })
     })
     .catch((error)=>{
       update(
         {
          users:[],
          isFirst:false,
          isLoading:false,
          error:error.message
         }
       )
     })

  }
  render(){
    return (
      <div>
        <input type="text" placeholder="请输入..." ref='search'/>&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}