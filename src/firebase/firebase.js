import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHWx-hHgfzJ8Xo2z7uBPTr25R1nDlsxWs",
  authDomain: "urbanuptrend-ab545.firebaseapp.com",
  projectId: "urbanuptrend-ab545",
  storageBucket: "urbanuptrend-ab545.appspot.com", 
  messagingSenderId: "161860531402",
  appId: "1:161860531402:web:3b5b8591dfbb9078ef3033",
  measurementId: "G-XDYTBY77FK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 