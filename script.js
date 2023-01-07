const firebaseConfig = {
  apiKey: "AIzaSyCx_BFOHhxdJlUxGa3VSbwwrBeegHJfFHs",
  authDomain: "vortex-game-project.firebaseapp.com",
  projectId: "vortex-game-project",
  storageBucket: "vortex-game-project.appspot.com",
  messagingSenderId: "155229811085",
  appId: "1:155229811085:web:d3c836dd2f1874f729cdc4",
  measurementId: "G-B4L6LCPXD1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
auth.onAuthStateChanged((user) => {
  // Check for user status
  console.log("state changed", user);
  if (user) {
    document.getElementById("logout").style.display = "block";
    document.getElementById("submit").style.display = "none";
    alert("User logged in");
    window.location.replace("index3.html");
    return;
  }

  document.getElementById("submit").style.display = "block";
  document.getElementById("logout").style.display = "none";
  alert("user signed out");
});
function handleLogout() {
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
function firebaseSignup(email, password) {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User Created");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("error_container").innerText = errorCode;
      // ..
    });
}
function firebaseLogin(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.replace("index3.html");
      if (user) {
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("error_container").innerText = errorCode;
      // ..
    });
}
// const analytics = getAnalytics(app);
function handleLogin(e) {
  e.preventDefault();
  document.getElementById("error_container").innerText = "";
  const email = e.target.email.value,
    password = e.target.password.value;
  firebaseLogin(email, password);
}
function handleSignup(e) {
  e.preventDefault();
  document.getElementById("error_container").innerText = "";
  const email = e.target.email.value,
    password = e.target.password.value;
  firebaseSignup(email, password);
}
