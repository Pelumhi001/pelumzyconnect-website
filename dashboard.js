import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2oSW4ZbuQgTi-JgGVsHB0tMPuqKciCB0",
  authDomain: "pelumzyconnecet.firebaseapp.com",
  projectId: "pelumzyconnecet",
  storageBucket: "pelumzyconnecet.appspot.com",
  messagingSenderId: "253701171126",
  appId: "1:253701171126:web:958e36fee219b841b0c317"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userNameEl = document.getElementById("userName");
const userEmailEl = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userNameEl.textContent = user.displayName || "No name provided";
    userEmailEl.textContent = user.email;
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out successfully.");
    window.location.href = "login.html";
  }).catch((error) => {
    alert("Logout error: " + error.message);
  });
});

window.printLetter = function () {
  const name = userNameEl.textContent;
  const email = userEmailEl.textContent;
  const letterContent = `
    <h2>Application Letter</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p>Thank you for registering at Pelumzy Connect. We are glad to have you on board.</p>
  `;
  const printWin = window.open('', '', 'height=600,width=800');
  printWin.document.write('<html><head><title>Print</title></head><body>');
  printWin.document.write(letterContent);
  printWin.document.write('</body></html>');
  printWin.document.close();
  printWin.print();
};
