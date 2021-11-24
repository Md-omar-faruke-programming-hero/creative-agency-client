import { GoogleAuthProvider , getAuth, signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../FireBase/fireBase.initial";

fireBaseInitialization()
const useFireBase=()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const[user,setUser]=useState('')
    const[isloading,setLoading]=useState(true)

    
    // google login
    const signInUsingGoogle=()=>{
      setLoading(true)
      return  signInWithPopup(auth, provider)
  
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              console.log(user)
            } 
            setLoading(false)
          });
    },[auth])

    // sign out
    const signout=()=>{
      setLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          }).finally(()=> setLoading(false));
    }



    return{
        user,
        signInUsingGoogle,
        signout,
        setLoading,
        isloading

        

    }



}
export default useFireBase