const EventComponent: React.FC = () => { 
  
    const onChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);
    }
   
const onDragStart= (event:React.DragEvent<HTMLDivElement>)=>{
 console.log(event);
};

    return (
        <div>
            <input onChange ={onChange}/>
            <div className="text-4xl" draggable onDragStart ={onDragStart}>
                drag me!!!
            </div>
        </div>
    );
    
};


export default EventComponent;