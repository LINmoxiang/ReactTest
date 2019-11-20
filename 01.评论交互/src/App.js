import React from "react"
import Add from "./components/add/Add.jsx"
import List from "./components/list/List.jsx"

export default class App extends React.Component{
  state = {data:[
    {id:'0',name:'Lin',comment:'good'},
    {id:'1',name:'Zhang',comment:'fine'}
  ]}
  update = (newData) => {
    let {data} = this.state
    newData.id = Date.now()
    data.unshift(newData)
    this.setState(data)
  }

  delComment = (id)=>{
    let {data} = this.state
    data = data.filter((item)=>{
      return item.id !== id
    })
    this.setState({data})
  }

  render(){
    let {data} = this.state
    return(
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add data={data} updata={this.update}/>
          <List data={data} delComment={this.delComment}/>
        </div>
      </div>
    )
  }
}
