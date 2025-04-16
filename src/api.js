import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const submitQuote = async (quote) => {
  try {
    const docRef = await addDoc(collection(db, 'quotes'), {
      ...quote,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error submitting quote:', error);
    throw error;
  }
};

export const searchQuotes = async (searchType, searchValue) => {
  try {
    const quotesRef = collection(db, 'quotes');
    const q = query(quotesRef, where(searchType, '==', searchValue));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error searching quotes:', error);
    throw error;
  }
};