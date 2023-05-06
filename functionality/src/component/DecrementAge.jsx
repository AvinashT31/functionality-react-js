import { useReducer } from "react";
import reducer, { initialState } from "../Helper/ReducerB";


const DecrementAge = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    function decAge(){
        dispatch({type:'decremented_age'})
    }

    return(
        <div>
            <h1>{state.name} your age {state.age}</h1>
            <button onClick={decAge}>Decrement age</button>
        </div>
    )
}
export default DecrementAge;