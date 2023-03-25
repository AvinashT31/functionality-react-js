import { json, useNavigate } from "react-router-dom"


function Homepage() {

    const route = useNavigate();

    function check() {

        var DataFromLS = JSON.parse(localStorage.getItem("user"));
        console.log(DataFromLS, "DataFromLS");

        if (DataFromLS) {
            var DivFromHTML = document.getElementById("logout");
            console.log(DivFromHTML, "DivFromHTML");

            var logoutbutton = `<button onClick={logout}>logout</button>`
            console.log(logoutbutton, "logoutbutton")
            DivFromHTML.innerHTML = logoutbutton;
            console.log(DivFromHTML, "DivFromHTML");
            
        }

    }

    check()

    function logout() {
        localStorage.removeItem("user");
        alert("logout Successsfully")
    }



    return (
        <div>
            <h1>This is homepage</h1>
            <div id="logout">

            </div>
        </div>
    )
}
export default Homepage