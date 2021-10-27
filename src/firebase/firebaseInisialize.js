import initializeApp from 'firebase'
import firebaseConfig from './firebase.config'

const firebaseInitializeApp = () => {
    initializeApp(firebaseConfig)
}
export default firebaseInitializeApp