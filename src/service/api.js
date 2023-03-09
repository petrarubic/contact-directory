import { db } from "../firebase/config";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

const contactCollectionRef = collection(db, "contacts");

export async function addContact({ contact }) {
  try {
    return addDoc(contactCollectionRef, contact);
  } catch (error) {
    console.log("Error with creating a new contact");
    return undefined;
  }
}

export async function updateContact({ id, updatedContact }) {
  try {
    const contactDoc = doc(db, "contacts", id);
    return updateDoc(contactDoc, updatedContact);
  } catch (error) {
    console.log("Error with updating existing contact");
    return undefined;
  }
}

export async function deleteContact(id) {
  try {
    const contactDoc = doc(db, "contacts", id);
    return deleteDoc(contactDoc);
  } catch (error) {
    console.log("Error with deleting contact");
    return undefined;
  }
}

export async function getContacts() {
  try {
    return getDocs(contactCollectionRef);
  } catch (error) {
    console.log("Error with fetching contacts");
    return [];
  }
}

export async function getContact(id) {
  try {
    const contactDoc = doc(db, "contacts", id);
    return getDoc(contactDoc);
  } catch (error) {
    console.log("Error with fetching contact data");
    return undefined;
  }
}
