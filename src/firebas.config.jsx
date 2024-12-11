
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAf2DfvRUVFKVe9sMMZnAJ67LO2JjISL-0",
  authDomain: "note-app-6fd5d.firebaseapp.com",
  projectId: "note-app-6fd5d",
  storageBucket: "note-app-6fd5d.firebasestorage.app",
  messagingSenderId: "223001156598",
  appId: "1:223001156598:web:0ab8843e3b37acabb645d7",
  measurementId: "G-QHFNPB5768"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app