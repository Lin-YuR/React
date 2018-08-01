import React from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import TodoAddForm from './TodoAddForm'

import styles from '../style/styles.js'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            items:[],
        }
    }
    handleItemAdd = (aItem) => {
        const newItems = [aItem, ...this.state.items]
        this.setState({
            items:newItems,
        })
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
                <TodoAddForm placeholderText="Type something here!" onItemAdd={this.handleItemAdd}/>
                <TodoList>
                {
                    this.state.items.map((item,index) => (
                        <TodoItem
                            key={item.id}
                            style={item.isCompleted? styles.itemCompleted: styles.itemNormal}
                            title={item.title}
                            onItemClick={()=>{this.handleStylingItem(index)}}
                        />
                      )
                    )
                }
                </TodoList>
            </div>
        )
    }
}
export default App
