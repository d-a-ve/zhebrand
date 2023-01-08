import {
  getFirestore,
  query,
  onSnapshot,
  collection,
  getDoc,
  getDocs,
  addDoc,
  where,
  doc,
  setDoc,
  serverTimestamp,
  DocumentSnapshot,
} from "firebase/firestore";
import { initFirebase } from "../lib/config";

initFirebase();
const db = getFirestore();

export const sumArray = (array: number[]) => {
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum;
};

type UserType = {
  country: string;
  email: string;
  imgUrl: string;
  name: string;
  phone: string;
  uid: string;
};

export const createUser = (
  email: string,
  name: string,
  country: string,
  userId: string
) => {
  const usersColRef = doc(db, "users", userId);
  return setDoc(usersColRef, {
    uid: userId,
    name: "",
    email: email,
    country: country,
    phone: "",
    imgUrl: "",
    created: serverTimestamp(),
  });
};

export const subscribe = (email: string) => {
  const ref = collection(db, "mails");
  return addDoc(ref, {
    email: email,
  });
};

export const getUser = async (userId: string) => {
  const userDocRef = doc(db, "users", userId);
  const getRef = await getDoc(userDocRef);
  const data = getRef.data();
  const dataObj: UserType = {
    country: data.country,
    email: data.email,
    imgUrl: data.imgUrl,
    name: data.name,
    phone: data.phone,
    uid: data.uid,
  };
  return dataObj;
};

export const streamAllUsers = async () => {
  const ref = collection(db, "users");
  const snapshot = await getDocs(ref);
  const users = [];
  snapshot.docs.forEach((x: DocumentSnapshot) => {
    var id = x.id;
    users.push({ ...x.data(), id });
  });

  return users;
};

export const allowEmail = (email: string) => {
  const pp = [];
  const ref = query(collection(db, "mails"), where("email", "==", email));
  onSnapshot(ref, (querySnapshot) => {
    const man: boolean = querySnapshot.empty ? true : false;

    if (man) {
      pp.push(man);
      return pp[0];
    }
  });  
};


export const streamAllEmails = async () => {
  const ref = collection(db, "mails");
  const snapshot = await getDocs(ref);
  const emails = [];
  snapshot.docs.forEach((x: DocumentSnapshot) => {
    var id = x.id;
    emails.push({ ...x.data(), id });
  });
  return emails;
};