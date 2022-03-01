import { _app } from "./index.js"
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js"

const profile = document.getElementById('profile');
const storage = getStorage();
const db = getFirestore();

if(localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.setItem("user"));
    document.querySelector("input[name = username]").Placeholder = user["username"];
    document.querySelector("input[name = address]").Placeholder = user["address"];
    document.querySelector("input[name = phone]").Placeholder = user["phone"];
    document.querySelector("input[name = website]").Placeholder = user["website"];
}

if (profile) {
    profile.onsubmit = e=>{
        e.preventDefault()
        const formData = new FormData(profile);
        const data = {}
        for (let[key,value] of formData) data[key] = value;
        

        const fileName = `${Date.now()}-${data["profile"]["name"]}`;
        const storageRef = ref(storage, fileName);
        

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, data["profile"])
            .then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(storageRef)
                    .then((url) => {
                        delete data['profile'];
                        data['url'] = url;
                        const id = localStorage.getItem("uid");
                        setDoc(doc(db, "user", id ), data)
                            .then(() => {
                                const user = JSON.st
                            })
                    })
    })

    }
}