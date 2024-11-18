


function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="bg bg-gray-100  w-60 border rounded-md p-3 m-4 float-left shadow-[0_2px_5px_gray-500]">
        <h1 className="text-xl mb-2">{props.title}</h1>
        <p className="text-sm mb-3 whitespace-pre-wrap break-words">{props.content}</p>
        <button onClick={handleClick} className="text-[12px] text-gray-400 float-right hover:text-yellow-600 transition ease-out duration-500  ">Delete</button>
    </div>
  )
}

export default Note