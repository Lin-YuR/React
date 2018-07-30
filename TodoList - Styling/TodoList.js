import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items:[],
            inputValue:'',
        }
    }
    handleChange = (e) => {
        this.setState({inputValue : e.target.value})
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            const aItem = {
                text: e.target.value,
                isCompleted : false
            }
            const newItems =  [aItem, ...this.state.items]
            this.setState({
                items : newItems,
                inputValue : '',
            })
        }
    }
    handleStylingItem = (index) => {
        const newItems = [...this.state.items]
        newItems[index].isCompleted = !newItems[index].isCompleted
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
                        this.state.items.map((item,index)=>{
                            return <TodoItem 
                                    key={index}
                                    style={item.isCompleted?{color:'red',textDecoration: 'line-through'}:{color:'green'}} 
                                    text={item.text} 
                                    index={index} 
                                    onItemClick={this.handleStylingItem}
                                    />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList
