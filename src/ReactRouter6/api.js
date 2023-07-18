// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBUuLU61j_CLQkr4rY63WKcf5bFMFP_trg",
  authDomain: "vanlife-87a8f.firebaseapp.com",
  projectId: "vanlife-87a8f",
  storageBucket: "vanlife-87a8f.appspot.com",
  messagingSenderId: "586596981433",
  appId: "1:586596981433:web:b2458b85b196726dfb5968"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef) 
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        // eslint-disable-next-line
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}