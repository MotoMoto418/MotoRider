import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCippf3ARv9ZFUt-WSoda0Fv4yxImzAaVI",
  authDomain: "wt-project-5b567.firebaseapp.com",
  projectId: "wt-project-5b567",
  storageBucket: "wt-project-5b567.appspot.com",
  messagingSenderId: "331540668651",
  appId: "1:331540668651:web:1e367cc0e8978794631eae",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
