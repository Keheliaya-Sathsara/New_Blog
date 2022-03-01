export let app = firebase.app();
const cred = app._delegate._options;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

export const _app = initializeApp(cred);
// console.log(_app);

const auth = getAuth();

const signin_form = document.getElementById('signin');

if (signin_form) {
    signin_form.onsubmit = e => {
        e.preventDefault();
        document.getElementById('signin-status').innerHTML = " ";
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(cred => {
                document.getElementById("id02").style.display = "none";
            })
            .catch(err => {
                document.getElementById("signin-status").innerHTML = err.code;
                // console.log('====================================');
                // console.log(err.message,err.code);
                // console.log('====================================');
            })
    }
}


const signup_form = document.getElementById('signup')

if (signup_form) {
    signup_form.onsubmit = (e) => {
        e.preventDefault();
        document.getElementById("signup-status").innerHTML = " ";
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                document.getElementById("id01").style.display = "none";
            })
            .catch((err) => {
                document.getElementById("signup-status").innerHTML = err.code;
                // console.log("====================================");
                // console.log(err.message, err.code);
                // console.log("====================================");
            });
    };
}

// ###################################################
onAuthStateChanged(auth, (user) => {
    if(user){
        localStorage.setItem('uid', user.uid);
        document.querySelectorAll('a[title=auth]').forEach(node => {
            // console.log(node);
            node.style.display = 'block'
        })
        document.getElementById('panel').innerText = user.email;
        document.querySelectorAll('a[title=authdone]').forEach(node=>{
            node.style.display = 'none'
        })
    }
    else{
        document.querySelectorAll('a[title=auth]').forEach(node => {
            // console.log(node);
            node.style.display = 'none'
        })
    }
});


const signout_button = document.getElementById("signout");
signout_button.onclick = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            console.log("signout");
            location.reload();
        })
        .catch((error) => {
            // An error happened.
            console.log("error:signout");
        });
};



// ######################################