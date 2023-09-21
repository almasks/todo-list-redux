import { ADD_TODO, DELELTE_TODO, EDIT_TODO } from "./todoTypes";

const initialState = {
  todoList: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, { id: Date.now(), todo: action.payload.todo }],
      };
    case DELELTE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((list) => list.id !== action.payload),
        ],
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList:[
          ...state.todoList.map((list)=>list.id===action.payload.id?
          {...list,todo:action.payload.todo}:list)
        ]
        
      
      };
    default:
      return state;
  }
};
