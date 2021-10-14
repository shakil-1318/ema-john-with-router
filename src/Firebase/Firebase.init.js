import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

/*

steps for authentication

-------------------------------
step-1: Initialize set up

1.firebase : create project
2.craete web app
3.get config
4.initialize firebase
5. enable auth

-----------------------------------

step-2: create component
1. crate login component
2. create register component
3. create router for login and register

-------------------------------------------
step-3: create sign in method
1. set up sign in method
2. set up log out methos
3. special observer user auth state changd or not
4. return necessary method and states from usefirebase
---------------------------------------------------------

step-4: create auth context and hook
1. create a auth context
2. create context provider
3. set context provider and context value
4. use auth Provider
5. create useAuth hook

---------------------------------------------------------

step-5: create private route
1. create private route
2. set private route
----------------------------------------

step-6: After login redirect
1. after login redirect user to their desired destination

*/