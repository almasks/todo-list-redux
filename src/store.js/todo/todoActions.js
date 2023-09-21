import { ADD_TODO, DELELTE_TODO, EDIT_TODO } from "./todoTypes"

export const addTodo=(todo)=>{
    return{
        type:ADD_TODO,
       payload:todo,
    
    }
}
export const deleteTodo=(id)=>{
    return{
        type:DELELTE_TODO,
        payload:id
    }
}
export const editTodo=(data)=>{
    return{
        type:EDIT_TODO,
        payload:data
    }
}