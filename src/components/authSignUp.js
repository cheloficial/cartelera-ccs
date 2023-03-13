import { auth, googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export const AuthSignUp = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password); 
        } catch (err) {
            console.error(err);
        }
    };

    const handleSignUpWithGoogle = async () =>{
        try{
            await signInWithPopup(auth, googleProvider); 
        } catch (err) {
            console.error(err);
        }
    };

    return(
        <div>
            <input 
            placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}> Sign Up</button>
            <button onClick={handleSignUpWithGoogle}> Sign Up with Google </button>
        </div>
    );
};