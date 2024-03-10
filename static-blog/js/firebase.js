
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNiw5Wgpuixol0e_A4dOB4CIBhM_dbM5E",
    authDomain: "play-dev-416405.firebaseapp.com",
    databaseURL: "https://play-dev-416405-default-rtdb.firebaseio.com",
    projectId: "play-dev-416405",
    storageBucket: "play-dev-416405.appspot.com",
    messagingSenderId: "857626179474",
    appId: "1:857626179474:web:81b42353034db25cb5b34b",
    measurementId: "G-7H70BF1VMS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
