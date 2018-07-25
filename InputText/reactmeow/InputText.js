import React from 'react'

class InputText extends React.Component{
    state = {text:'',}
    handleChange = (e) =>{
      this.setState({text: e.target.value})
    }
    render(){
      return(
        <div>
          <input
          placeholder='Type something here!' 
          onChange={this.handleChange}/>
          <h1>{this.state.text}</h1>
        </div>
      )
    }
  }
  export default InputText
