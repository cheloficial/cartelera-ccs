import { auth, googleProvider} from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export const AuthSignIn = () => {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const handleSignIn = async () =>{
            try{
                await signInWithEmailAndPassword(auth, email, password); 
            } catch (err) {
                console.error(err);
            }
        
    };

    const handleSignInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth, googleProvider); 
        } catch (err) {
            console.error(err);
        }
    };
    const logOut = async () =>{
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    
    };
    return (
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
            <button onClick={handleSignIn}> Sign In</button>
            <button onClick={handleSignInWithGoogle}> Sign In with Google </button>
            <button onClick={logOut}> Log Out </button>

        </div>
    );
};