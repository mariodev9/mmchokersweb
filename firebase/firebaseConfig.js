import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyBMNUBFwHEotpuIVuMX3MgqpvbhiZThGd0",
  authDomain: "mmchokers-e1895.firebaseapp.com",
  projectId: "mmchokers-e1895",
  storageBucket: "mmchokers-e1895.appspot.com",
  messagingSenderId: "361906327730",
  appId: "1:361906327730:web:1542460a8d9c1d3d4bf9ab",
};

const app = initializeApp(config);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
