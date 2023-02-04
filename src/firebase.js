import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDCbCuBP0YyCA0clH14trdfilAAdoE7R5Y',
  authDomain: 'login-e94ad.firebaseapp.com',
  databaseURL: 'https://login-e94ad.firebaseapp.com',
  projectId: 'login-e94ad',
  storageBucket: 'login-e94ad.appspot.com',
  messagingSenderId: '350916054417',
  appId: '1:350916054417:web:e33a1982cff952ecb85e30',
});

export const auth = app.auth();
export default app;
