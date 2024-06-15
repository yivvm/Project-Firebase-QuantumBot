document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  //   console.log(app);

  const db = firebase.firestore();

  const myPost = db.collection("posts").doc("firstpost");

  myPost.onSnapshot((doc) => {
    const data = doc.data();
    document.querySelector("#title").innerHTML = data.title;
    // document.write(`<br>` + data.title + `<br>` + data.time + `<br>`);
    // document.write(data.time + `<br>`);
  });
});

function updatePost(e) {
  const db = firebase.firestore();
  const myPost = db.collection("posts").doc("firstpost");
  myPost.update({ title: e.target.value });
}

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();

//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       const user = result.user;
//       document.write(`Hello ${user.displayName}`);
//       console.log(user);
//     })
//     .catch(console.log);
// }
