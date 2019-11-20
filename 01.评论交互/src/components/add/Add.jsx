import React from "react"

export default class Add extends React.Component{
  
  click = () =>{
    let {updata} = this.props
    let name = this.input1.value
    let comment = this.refs.input2.value
    if(!name.trim() && !comment.trim()){
      updata({name,comment})
      this.input1.value = ''
      this.refs.input2.value = ''
    }else{
      alert('用户名和评论军不能为空')
      this.input1.value = ''
      this.refs.input2.value = ''
    }
  }

  render(){
    
    return(
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref={(input)=>{this.input1=input}}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="input2"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.click}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}