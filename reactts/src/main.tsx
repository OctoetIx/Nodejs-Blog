import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GuestList from './State/GuestList';
import EventComponent from './events/EventComponents';
import UserSearch from './State/UserSearch';


const App = () =>{
    return (
        <div >
            <div><GuestList/></div>
            <div> <UserSearch/> </div>
            <div><EventComponent/></div>
           
        </div>
    )
 
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
