const redux = require('redux'); //import redux

const counterReducer = (state= {counter:0},action) =>{
 if(action.type === 'decrement')
 {
    return {
    
        counter:state.counter-1
     };
 }
 else if(action.type ==='increment'){
    return {
        counter:state.counter +1
    }
 }
return state;

};

const store = redux.createStore(counterReducer);
const counterSubscriber = () =>{
   const lateststate= store.getState();
   console.log(lateststate);
}
store.subscribe(counterSubscriber);
store.dispatch({type:'decrement'})
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
