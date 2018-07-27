import React from 'react'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:[],
            inputValue:'',
        }
    }
    handleChange = (e) =>{
        this.setState({inputValue: e.target.value})
    }
    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            const newItems = [e.target.value, ...this.state.items]

            this.setState({
                items: newItems,
                inputValue:'',
            })
        }
    }
    render(){
        return(
            <div>
                <input 
                  placeholder = 'type something here!'
                  onChange = {this.handleChange}
                  onKeyPress = {this.handleKeyPress}
                />
                <ul>
                {
                    this.state.items.map((value)=>{return <li>{value}</li>})
                }
                </ul>
            </div>
        )
    }
}
export default TodoList
