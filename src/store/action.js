import { COUNTER_ADD, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_MULTI, COUNTER_SUBSTRACT } from "./action.types";

export const add = (value) => ({type : COUNTER_INCREMENT})
export const substract = (value) => ({type : COUNTER_DECREMENT})


export const add1 = (value) => ({type : COUNTER_ADD, payload:value})
export const substract1 = (value) => ({type : COUNTER_SUBSTRACT,payload:value})
export const multi = (value) => ({type : COUNTER_MULTI, payload:value})
export const divide = (value) => ({type : COUNTER_DIVIDE,payload:value})
