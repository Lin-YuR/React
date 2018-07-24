import React from 'react'
import TextShow from './TextShow'

class TextInput extends React.Component {
        state ={
            text: '',
            text1: '',
        }
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    handleChange1 = (e) => {
        this.setState({text1: e.target.value})
    }
    render() {
        return (
                 <div>
                  <input
                    placeholder={this.props.initText}
                    onChange={this.handleChange}/>
                  <TextShow text={this.state.text}/>  
                  <input
                    placeholder={this.props.initText}
                    onChange={this.handleChange1}/>
                  <TextShow text={this.state.text1}/>                                  
                </div>
       )
    }
}
export default TextInput
