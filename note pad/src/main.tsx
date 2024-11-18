import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () =>{

    const[notes,setNotes] = useState([]);

    function addNote (newNote){
      setNotes(prevNote =>{
       return [...prevNote,newNote];
      })
    }

    function deleteNote(Id){
      setNotes(prevNote =>{
        return prevNote.filter((noted,index) =>{

          return index !== Id;

        })
      })
    }

    return (
        <div >
         <Header/>
        <CreateArea onAdd={addNote} />
        {notes.map((noteitem,index)=>{
          return(
            <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            onDelete={deleteNote}
            />
          )
        })}
      
       <Footer/>
        </div>
    )
 
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
