import { createStore,combineReducers } from 'redux';

var reducers = combineReducers({
    num:changeNum
})
function changeNum(state=0,action){
      if(action.type === 'ADD_NUM'){
          state+=1
          return state
      }else if(action.type === 'REDUCE_NUM'){
          state-=1
          return state
      }
      return state;
}
var store = createStore(reducers,{})
export default store;