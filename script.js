const reducer = Redux.combineReducers(
    {
        todos: ( state = [], action ) => {
            const newState = Object.assign( [], state );
            if ( action.type === "add" ) {
                newState.push( action.item );
            }
            if ( action.type === "remove" ) {
                newState.splice( action.index, 1 );
            }
            return newState;
        }
    }
)

const store = Redux.createStore( reducer );

window.store = store;

const render = () => {
    const container = document.getElementById("container");
    container.innerHTML = " ";
    const state = store.getState();
    state.todos.forEach((todo,i)=>{
        const e = document.createElement("div");
        console.log(todo)
        e.innerHTML = todo;
        container.appendChild(e);
        e.onclick = () => {
            store.dispatch( {
                type: 'remove',
                index: i
            } )
        }
        document.getElementById("todo").innerHTML = ""
    })
    
} 


document.getElementById( "submit-todo" ).onclick = () => {
    store.dispatch({
        type: 'add',
        item: document.getElementById('todo').value
    })
    render();
}