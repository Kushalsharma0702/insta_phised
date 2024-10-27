// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLXFoEdcuAneYbhwjpj9UVkJENWDKBlh0",
    authDomain: "logintesting-d67ce.firebaseapp.com",
    databaseURL: "https://logintesting-d67ce-default-rtdb.firebaseio.com",
    projectId: "logintesting-d67ce",
    storageBucket: "logintesting-d67ce.appspot.com",
    messagingSenderId: "1097763678158",
    appId: "1:1097763678158:web:7decb59cfdd801d5ddad9f",
    measurementId: "G-5B4B6NC9X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store data in Firebase Realtime Database (for demonstration purposes)
    push(ref(database, 'users/'), {
        username: username,
        password: password // Note: Storing passwords in plain text is not recommended
    }).then(() => {
        alert('Logged in successfully!');
        // Here you can redirect the user or perform any other actions
    }).catch((error) => {
        console.error('Error saving data:', error);
        alert('Error logging in.');
    });
});

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const inputType = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = inputType;
    togglePassword.innerHTML = inputType === 'text' ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>'; // Change icon
});
