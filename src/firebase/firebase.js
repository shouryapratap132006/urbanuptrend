// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHWx-hHgfzJ8Xo2z7uBPTr25R1nDlsxWs",
  authDomain: "urbanuptrend-ab545.firebaseapp.com",
  projectId: "urbanuptrend-ab545",
  storageBucket: "urbanuptrend-ab545.firebasestorage.app",
  messagingSenderId: "161860531402",
  appId: "1:161860531402:web:3b5b8591dfbb9078ef3033",
  measurementId: "G-XDYTBY77FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);