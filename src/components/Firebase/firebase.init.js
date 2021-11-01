import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
-------------------------
Step-1: Initial Setup
1.firebase : create project
2. create web app
3.get configuration
4.initialize firebase
5.Enable auth method
--------------------
Step-2: setup components
1.Create Login Component
2.Create Register Component
3.Create Route for Login and Register
------------------------
Step 3: set auth system
1.set up sign in method
2.setup sign out method
3.user state
4.special observer for tracking user when signs in or out
5.return necessary method and states from useFirebase
------------------------
Step 4: create auth context hook (useAuth)
1.create an auth context
2.create context provider
3.set context Provider context value
4.use auth provider
5.create useAuth hook
----------------------
step 5: create private route
1. create private Route
2. set private route
---------------------
Step-6: Redirect after login
1.after login redirect user to their desired destination

*/