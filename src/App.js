import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { NavBar }  from './Components/NavBar/Navbar'
import { Menu } from './Components/Menu/Menu'
import GlobalStyle from './Components/Style/GlobalStyle'
import { ModalItem } from './Components/Modal/ModalItem'
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/Hooks/useOpenItem'
import { useOrders } from './Components/Hooks/useOrders'
import { useAuth } from './Components/Hooks/useAuth'
import { useTitle } from './Components/Hooks/useTitle'
import { useDB } from './Components/Hooks/useDB'
import { OrderConfirm } from './Components/Order/OrderConfirm'
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm'
import { Context } from './Components/Functions/context'
import {Planets} from 'react-preloaders';


const firebaseConfig = {
  apiKey: "AIzaSyBIQ7lhXuY-NvW6Mcv5eq1xMczbVu7rrkw",
  authDomain: "mrdonalds-80e19.firebaseapp.com",
  databaseURL: "https://mrdonalds-80e19-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-80e19",
  storageBucket: "mrdonalds-80e19.appspot.com",
  messagingSenderId: "383893088063",
  appId: "1:383893088063:web:dd306e1bd736543ac8158a"
};

firebase.initializeApp(firebaseConfig)

function App() {
  const auth = useAuth(firebase.auth)
  const openItem = useOpenItem()
  const orders = useOrders()
  const database = firebase.database()
  const orderConfirm = useOrderConfirm()
  useTitle(openItem.openItem)
  const dbMenu  = useDB(database)
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders, 
      orderConfirm,
      firebaseDatabase: firebase.database
      }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu dbMenu={dbMenu}/> 
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
