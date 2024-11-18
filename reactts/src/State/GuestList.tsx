
import { useState } from "react";


const GuestList: React.FC = ()=>{
    const [name ,setName] = useState('');
    const [guests, setGuest] = useState<string[]>([])
    
    const onClick =() =>{
        setName('');
        setGuest([...guests,name])
    };

        const keyHandler = (event:KeyboardEvent) =>{
            if (event.key === 'Enter'){
                setName('');
                setGuest([...guests,name])
            }
        }
    
    document.addEventListener('keydown',keyHandler)
   
    return (
        <div>
            <h3>Guest List</h3>
        <ul>
            {guests.map((guest) => (
                <li key={guest}>{guest}</li>
            ))}
        </ul>
            <input className="border rounded-lg w-96 border-black" placeholder="Guest Name" value={name}  onChange={(e) =>setName(e.target.value)} />
            <button className="" onClick={onClick}>Add Guest</button>
            
            
        </div>
        
    )
}

export default GuestList;