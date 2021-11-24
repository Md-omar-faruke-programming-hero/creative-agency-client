import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";
const fireBaseInitialization=()=>{
    initializeApp(firebaseConfig)
}
export default fireBaseInitialization