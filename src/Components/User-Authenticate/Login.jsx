import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Styles from "../../Styles/Login.module.css";



function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    
    const handleLogin = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleLoginSubmit = () => {
      console.log('user', user);

        axios.post("https://md-moin-authentication.herokuapp.com/login", user).then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token.split(".")[0]))
            localStorage.setItem("userDetails", JSON.stringify(res.data))
            alert("Login Successful")
            navigate("/")

        })






    };
    return (
        <>



            <div className={Styles.login_container}>

                <h1>Login</h1>
                <div className={Styles.login_input}>
                    <input
                        className={Styles.inputBox}
                        type="text"
                        placeholder="Enter email here."
                        name="email"
                        onChange={handleLogin}
                    />
                    <input
                        className={Styles.inputBox}
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleLogin}
                    />

                    <div className={Styles.login_btn}>
                        <button
                            className={Styles.submit}
                            type="submit"
                            onClick={handleLoginSubmit}
                        >
                            Login
                        </button>
                    </div>
                    <br />
                    <div className={Styles.login_btns}>
                        <Link to="/register" className={Styles.link_btn}>
                            New Account Create  ? Click here
                            <button
                                className={Styles.submits}
                                type="submit"
                            >
                                Sign In
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Login