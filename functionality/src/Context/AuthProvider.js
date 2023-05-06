import { createContext, useReducer } from "react";
export const AuthContext = createContext();
const initialState = ({ user: ""})

function reducer(state, action) {
    console.log(state);
    console.log(action);
     
    switch (action.type) {
        case 'login':
            return {
                user: action.payload
            };
        case 'logout':
            return {
                user: null
            }
        default:
            return state;
     };
}

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const login = (userData) => {
        dispatch({
            type: "login",
            payload: userData
        })
    }

     const logout = () => {
        dispatch({
            type: "logout"
        })
    };

    return (
        <div>
            <AuthContext.Provider value={{ state, login, logout }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider;

