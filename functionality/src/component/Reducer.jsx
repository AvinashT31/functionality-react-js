// import React, { useReducer } from "react";

// import { useReducer } from "react"

// function reducer(state, action) {
//     console.log(state, "state");
//     console.log(action, "action");
//     if (action.type === 'incremented_age') {
//         return {
//             age: state.age + 1
//         };
//     }
//     throw Error('unknown action');
// }


// export default function Reducer() {
//     const [state, dispatch] = useReducer(reducer, { age: 42 });
//     console.log(state, "state", dispatch, "dispatch");

//     return (
//         <div>
//             <button onClick={() => { dispatch({ type: 'incremented_age' }) }}>Increment Age</button>
//             <p>Hello! you are {state.age}</p>
//         </div>
//     )
// }


// initialState  = ({name:"", age:42})
import { useReducer } from "react"
import reducer, { initialState } from "../Helper/ReducerB";


export default function Reducer() {
    const [state, dispatch] = useReducer (reducer, initialState);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });
    }

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextname: e.target.value
        })
    }

    function handleButtonClickForDec() {
        dispatch({ type: 'decremented_age' });
    }

    return (
        <div>
            <input type="text" value={state.name} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Increment age</button>
            <button onClick={handleButtonClickForDec}>Decrement age</button>
            <p>Hello, {state.name}. you are {state.age}.</p>
        </div>
    )
}


