import { useState } from "react";
import { json, useNavigate } from "react-router-dom";


function Registration() {

    const [userData, setuserData] = useState({ Name: "", Number: "", Email: "", Password: "" })
    // console.log(userData, "userData");

    const  Route = useNavigate();

    function Register(e) {

        e.preventDefault();
        //   alert("working");

        var DataFromLS = JSON.parse(localStorage.getItem("UserForReact")) || [];
        //   console.log(DataFromLS, "DataFromLS")

        var flag = false;

        for (var i = 0; DataFromLS.length; i++) {
            if (DataFromLS[i].Email === userData.Email) {
                flag = true;
                // console.log(DataFromLS, "DataFromLS")
            }
        }
        if (flag) {
            alert("Email is already present")
        }
        else if (userData.Number.length < 10) {
            alert("Mobile no will 10 digit only")
        }
        else if (userData.Password.length < 8) {
            alert("Password must have 8 digit")
        }
        else {
            DataFromLS.push(userData);
            localStorage.setItem("UserForReact", JSON.stringify(DataFromLS));
            console.log(DataFromLS, "DataFromLS");
            setuserData({ Name: "", Number: "", Email: "", Password: "" });
            Route ("/Login");
            alert("registration Done");
        }

    }

    function displayData(e) {
        var name = e.target.name;
        var value = e.target.value;
        setuserData({ ...userData, [name]: value });
        //    console.log(e.target.name, e.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => Register(e)}>
                <label>Enter your Name</label>
                <br />
                <input type="text" onChange={displayData} name="Name" value={userData.Name} placeholder="Enter Your Name" />
                <br />
                <label>Enter your Number</label>
                <br />
                <input type="Number" onChange={displayData} name="Number" value={userData.Number} placeholder="Enter Your number" />
                <br />
                <label>Enter your Email</label>
                <br />
                <input type="Email" onChange={displayData} name="Email" value={userData.Email} placeholder="Enter Your Email" />
                <br />
                <label>Enter your Password</label>
                <br />
                <input type="Password" onChange={displayData} name="Password" value={userData.Password} placeholder="Enter Your Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default Registration;