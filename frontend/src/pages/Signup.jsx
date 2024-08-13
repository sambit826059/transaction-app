import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"


export const Signup = () => {

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ username, setUserame ] = useState("");
    const [ password, setPassword ] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        
        <Heading label={"Sign-Up"}/>
        
        <SubHeading label={"Enter your details to sign up"} />
        
        <InputBox onChange={e => {
            setFirstName(e.target.value);
        }} label={"First Name"} placeholder={"your first name"} />
        
        <InputBox onChange= {e => {
            setLastName(e.target.value);
        }} label={"Last Name"} placeholder={"your last name"} />
        
        <InputBox onChange={e => {
            setUserame(e.target.value);
        }} label={"username"} placeholder={"username"} />
        
        <InputBox onChange={e => {
            setPassword(e.target.value);
        }} label={"password"} placeholder={"password"} />
        
        <div className="pt-4">
            <Button onClick={() => {
                axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    password,
                    firstName,
                    lastName
                })
            }} label={"Sign up"} />
        </div>
        
        <BottomWarning label={"Already have an account"} buttonText={"Sign in"} />
        </div>
        </div>
    </div>
}