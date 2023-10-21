# Redux_practice
step-1: create folder and open cmd terminal
step-2: write a code to create vite project setup "npm create vite projectname" / select react and then select javascript
step-3: give cd command to change the path or to open a correct project folder
step-4: before install npm ensure the folder path is right then give command "npm install"
step-5: open the correct folder to vs code editer by passing the command "code ."
step-6: delete all the unwanted code for our project
step-7: Install react-bootstrap for utilies the bootstrap source for that give the command in the terminal " npm install react-bootstrap bootstrap" and import react bootstrap min.css in  main.jsx 
step-8: Install react router dom for router concepts so give command as "npm i react-router-dom"
step-10: Install redux toolkit in the terminal by passing the command "npm install @reduxjs/toolkit react-redux"
step-11: create component store.jsx and inside the component first import { configureStore } from "@reduxjs/toolkit"; and export default configureStore inside that add reducer "export default configureStore({
    reducer:{
    }
})"
step-12: In the main.jsx component import store and provider 

import store from './redux/store.jsx';
import { Provider } from 'react-redux';
step-13: Add provider to root render element and for the provider we want to give the store like props
"<Provider store={store}>      
    <App />
</Provider>"
step-14: Now the redux store is ready 