import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCy5xjv_3u_iBtK8W4_LrPyNnhYwG83o4s",
    authDomain: "renew-df06b.firebaseapp.com",
    databaseURL: "https://renew-df06b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "renew-df06b",
    storageBucket: "renew-df06b.appspot.com",
    messagingSenderId: "222991340556",
    appId: "1:222991340556:web:11669eed094efbd4e88a29"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

function writeUserData(name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, "parameters"), {
        speed: name,
        capacitor_voltage: email,
        distance: imageUrl,
    });
}
let a = 0, b = 0, c = 0;

setInterval(() => {
    writeUserData(a++, b++, c++);
}, 1000);