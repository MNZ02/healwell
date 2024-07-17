import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyCSvKwxOi_uegAOj2L1tCLmHiXjTMbOtdM',
  authDomain: 'healwell-d20a7.firebaseapp.com',
  databaseURL: 'https://healwell-d20a7-default-rtdb.firebaseio.com',
  projectId: 'healwell-d20a7',
  storageBucket: 'healwell-d20a7.appspot.com',
  messagingSenderId: '925414343722',
  appId: '1:925414343722:web:2497f96a7179e3af83ef53',
  measurementId: 'G-6GH81EB03Z'
}
const app = initializeApp(firebaseConfig)

// Get a reference to the auth service
const auth = getAuth(app)

export default app
export { auth }
