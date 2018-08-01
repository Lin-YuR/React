import React from 'react'

const TodoAddForm = ({placeholderText, onItemAdd}) => {
    let titleField
    return (
        <div>
            <input 
                ref={el=>titleField=el}
                placeholder={placeholderText} 
                onKeyPress={(e)=>{
                    if(e.key === 'Enter'){
                        onItemAdd({
                            id: +new Date(),
                            title: titleField.value,
                            isCompleted: false,
                        })
                        titleField.value=''
                    }
                }}
            />
        </div>
    )
}
export default TodoAddForm