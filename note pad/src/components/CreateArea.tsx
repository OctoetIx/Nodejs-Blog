import { useState } from "react"


function CreateArea(props) {

 const [note,setNote] = useState({
     title:"",
     content:"",
 })

function  handleChange(event) {
    const {name , value} = event.target

    setNote(prevNote =>{
      return{
        ...prevNote,
        [name]:value
      };
    });
  }
  function submitNote (event){
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  return (
    <div>
        <form className="relative w-96  m-[30px_auto_20px_auto] bg-white p-4 rounded-lg shadow-[0_1px_5px_rgb(138,137,137)] " >
            <input className="inp" name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea className="inp" name="content" onChange={handleChange} value={note.content} placeholder="Take a Note" cols={10} rows={4}/>
            <button onClick={submitNote} className="absolute right-5 bottom-[-18px] bg bg-yellow-500 text-white border-none rounded-[50%] w-9 h-9 shadow-[0_1px_3px_rgba(0,0,0,0.3)] cursor-pointer outline-none  ">Add</button>
        </form>
    </div>
  )
}

export default CreateArea