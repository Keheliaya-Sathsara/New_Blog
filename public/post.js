import { app, _app } from "./index.js";


import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

const root = document.getElementById('post-root')
const db = getFirestore();

if(root_post){
    window.addEventListener('DOMContentLoaded', () => {
        getDocs(collection(db, 'posts'))
            .then((snapshot) => {
                // posts(collection) iteration
                snapshot.forEach((doc) => {
                    const id = doc.id (http://doc.id/);
                    //comments
                    getDocs(collection(db,"comments"))
                        .then((snapshots)=>{
                            snapshots.forEach((comm)=>{
                                const commId = comm.id (http://comm.id/);
                                const {postId,name,date,body} = comm.data()
                                if (id === postId) {
                                    //dom
                                }
                            })
                        })
     
                    //destructure (posts)
                    const { name, date, title, body } = doc.data();
                    //create element
                    const post = document.createElement('div');
                    //variable inject
                    post.innerHTML = `
                    <div id=${id}>
                        <h3>${name}</h3>
                        <h4>${title}</h4>
                        <p>${body}</p>
                        <p>${date}</p>
                        <div id="comment"></div>
                    </div>
                    `
                    // add child element
                    if (root) {
                        root.appendChild(post);
                    }
                })
            })
     })
}

[
    {
        "id": "",
        "postID": "",
        "name": "",
        "date": "",
        "body": ""
    }
]

<div id=${doc.id}>
    <h3>${name}</h3>
    <h4>${title}</h4>
    <p>${body}</p>
    <p>${date}</p>
    </div id="comment">

    </div>
</div>
