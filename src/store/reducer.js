import { COUNTER_ADD, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_MULTI, COUNTER_SUBSTRACT } from "./action.types";


export const reducer = (state, {type , payload}) => {
//    console.log(state,action)

   switch(type){
       case COUNTER_INCREMENT:{
         state.count++;
    
        return {...state}
       }
       case COUNTER_DECREMENT:{
        state.count--;
     
        return {...state}
       }
       case COUNTER_ADD:{
        // state.count++;
        state.count = state.count + payload;
        return {...state}
       }
       case COUNTER_SUBSTRACT:{
        // state.count--;
        state.count = state.count - payload;
        return {...state}
       }
       case COUNTER_MULTI:{
        // state.count++;
        state.count = state.count * payload;
        return {...state}
       }
       case COUNTER_DIVIDE:{
        // state.count--;
        state.count = state.count / payload;
        return {...state}
       }
       default:{
           return state;
        }
    }   
}