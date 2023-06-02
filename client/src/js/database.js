import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
//putDb and getDb are exported function,content pased as parameter
  export const putDb = async (content)  => {
    console.log('PUT to the database');
  
    // database connection opened
    const contactDb = await openDB('jate', 1);
  
    // new transaction is created using readwrite  after db conn opened
    const tx = contactDb.transaction('jate', 'readwrite');
  
    // access object store named jate
    const store = tx.objectStore('jate');
    //put the provided content into store using put method
    const request = store.put({ id: 1, value: content });
    const result = await request;
    console.log('Data saved to db', result);
  };
  
  // logic for getMethods
   export const getDb = async () => {
    console.log('GET from the database');
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readonly')
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  };
  
  
  initdb();

