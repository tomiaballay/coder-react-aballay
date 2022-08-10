import { query, orderBy, where, collection, getDocs } from "firebase/firestore";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "productos"), where ("categoryId", "==", idCategory));
    } else {
        q = query(collection(db, "productos"), orderBy ("nombre"));
    }
    const querySnapshot = await getDocs (q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.idCategory,
        ...document.data()
    }));
    return dataFromFirestore
};

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc (docRef);

    if(docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log ("no document")
    }
};
