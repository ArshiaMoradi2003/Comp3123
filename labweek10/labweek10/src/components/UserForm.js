import React, {useState} from "react";

const INITIAL_USER_DATA = {
    username: '',
    email: '',
    password: '',
    Role:''
}
function UserForm(){

    const [userData, setUserData] = useState(INITIAL_USER_DATA)
    const handleFormChange = (e) =>{
        const {name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Form Submitted Succesfully")
        console.log("User Data Submitted:",userData)
        setUserData(INITIAL_USER_DATA)
    }
    return (
        <div>
            <h2>User Registration Form</h2>
            <form>
                <label>
                    Username:
                    <input type={"text"} name={"username"} placeholder="Enter Username"
                           value={userData.username}
                    onChange={handleFormChange}/>
                </label>
                <label>
                    Email:
                    <input type={"email"} name={"email"} placeholder={"Enter User Email"}
                    value={userData.email}
                    onChange={handleFormChange}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} name={"password"} placeholder={"Enter User Password"}
                    value={userData.password}
                    onChange={handleFormChange}/>
                </label>
                <label>
                    Select Role:
                    <select
                        name={"role"}
                        onChange={handleFormChange}>
                        <option value={""}>--Select Role--</option>
                        <option></option>
                    </select>
                </label>
                <button type={"submit"}
                        onClick={handleSubmit}/>
            </form>
        </div>
    )
}