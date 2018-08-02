import React from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import TodoAddForm from './TodoAddForm'

import styles from '../style/styles'
import '../style/animate.css'
import '../style/bootstrap.css'

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
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">TodoApp</h3>
                        </div>
                        <div className="panel-body">
                            <TodoAddForm placeholderText="Type something here!" onItemAdd={this.handleItemAdd}/>
                            <TodoList>
                            {
                                this.state.items.map((item,index) => (
                                    <TodoItem
                                        key={item.id}
                                        isCompleted={item.isCompleted}
                                        style={item.isCompleted? styles.itemCompleted: styles.itemNormal}
                                        title={item.title}
                                        onItemClick={()=>{this.handleStylingItem(index)}}
                                    />
                                )
                                )
                            }
                            </TodoList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App