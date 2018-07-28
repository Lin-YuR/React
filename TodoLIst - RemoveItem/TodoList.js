import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            inputValue:'',
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            const newItems=[e.target.value, ...this.state.items]
            this.setState({
                items: newItems,
                inputValue: '',
            })
        }
    }
    handleRemoveItem =(index) => {
        const oldItems =this.state.items
        const newItems =oldItems.slice(0,index).concat(oldItems.slice(index+1))
        this.setState({
            items: newItems,
        })
    } 
    render(){
        return(
            <div>
                <input 
                  placeholder={this.props.initText}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
                <ul>
                    {
                        this.state.items.map((value, index)=>{
                            return(
                                <TodoItem index={index} text={value} onItemClick={this.handleRemoveItem}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList
