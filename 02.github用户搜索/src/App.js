import React,{Component} from 'react'
import Search from './components/search/search.jsx'
import List from './components/list/list.jsx'

export default class App extends Component{
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    error:''
  }

  update = (dataObj)=>{
    this.setState(dataObj)
    console.log(this.state)
  }

  render(){
    return(
      <div className="container">
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <Search update={this.update}/>
        </div>
      </section>
      <List {...this.state}/>
    </div>
    )
  }
}