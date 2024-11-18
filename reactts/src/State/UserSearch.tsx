import { useState } from "react";
const users = [
    {name:'sarah', age:20},
    {name:'Alex', age:20},
    {name:'Michael', age:20}
];
const UserSearch: React.FC =()=> {

    const[name,setName] = useState('');
    const [user,setUser] =useState<{name:string, age:number}| undefined>();

    const onClick = () =>{
        const foundUser = users.find((user)=>{
            return user.name === name;
            
        }
        );
        setUser(foundUser);
        console.log(user?.name)
    }


    return <div>User Search
       <input className="" value={name}  onChange={(e) =>setName(e.target.value)} />
            <button className="bg bg-red-500 "  onClick={onClick}>Find Guest</button>
            
        <div>{user&&user.name}</div>
        <div>{user&&user.age}</div>
    </div>
}

export default UserSearch;