import React, {useState, useEffect} from "react";
import axios from "axios";
import "../style/Login.css"


function LoginUser (){
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
   

    async function login (){
        const user = {
            username, 
            password,
        };
        console.log(user);
        try {
            
            const result = (await axios.post("/api/users/login", user)).data;
            
            localStorage.setItem("curentUser", JSON.stringify(result));
            window.location.href ="/";
        } catch (error) {
            console.log(error)
        }
    }

return (
    <>
        
        <img className="wave" src="/wave.png" alt= ""/>
        <div class="container">
            <div className="img">
                <img src="/login.png" alt=""/>
            </div>
            <div className="login-container">
                
                <form action="/" method="post">
                    <h2 className="title">LOG IN</h2>
                    <div className="input-div one focus">
                    <div className="i">
                            <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                            <h5>email</h5>
                            <input name="username" className="input-fields" placeholder="Your email" type="email" required 
                                value={username}
                                onChange={(e) => {
                                    setusername(e.target.value);
                                }}
                            />
                    </div>
                    </div>
                    <div className="input-div pass focus">
                    <div className="i"> 
                            <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                            <h5>Password</h5>
                            <input name="password" className="input-fields" placeholder="Your Password" type="password" required 
                                value={password}
                                onChange={(e) =>{
                                    setpassword(e.target.value);
                                }}
                            />
                    </div>
                    </div>
                    <input type="submit" className="btn" value="Login"/>
                    <a href="/loginadmin">Login Sebagai Admin?</a>
                </form>
            </div>

        </div>
    </>
);

};
 
export default LoginUser;