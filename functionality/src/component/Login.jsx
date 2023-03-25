import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const [loginData, setloginData] = useState({ email: "", password: "" });
    // console.log(loginData, "loginData")

    const route = useNavigate();


    function click(e) {

        e.preventDefault();
        // alert("working");

        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact"));
        console.log(DataFromLS, "DataFromLS");

        var flag = false;

        for(var i=0; i < DataFromLS.length; i++){
            if(DataFromLS[i].Email === loginData.email && DataFromLS[i].Password === loginData.password){
                // console.log(DataFromLS, "product")
                flag = true;
            }
        }
        if(flag){
            setloginData({ email: "", password: "" });
            var currentuser= {};
            currentuser ["currentuseremail"] = loginData.email;
            console.log(currentuser, "currentuser")
            localStorage.setItem("user", JSON.stringify(currentuser));
            route('/');
            alert("login successfully")
        }
        else{
            alert("please check your Email")
        }

    }

    function updatingData(e) {

        var name = e.target.name;
        var value = e.target.value;
        setloginData({ ...loginData, [name]: value })
        // console.log(e.target.name);
    }


    return (
        <div>

            <form onSubmit={(e) => click(e)}>
                <label>Enter Your Email</label>
                <br />
                <input onChange={updatingData} name="email" value={loginData.email} type="email" placeholder="Enter Your Email" />
                <br />
                <label>Enter Your Password</label>
                <br />
                <input onChange={updatingData} name="password" value={loginData.password} type="password" placeholder="Enter Your Password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login;