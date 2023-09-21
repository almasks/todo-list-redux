import {createStore} from "redux"
import { todoReducer } from "./todo/todoReducer"
export const store=createStore(todoReducer)