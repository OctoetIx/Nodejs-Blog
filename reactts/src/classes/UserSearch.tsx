import { Component } from "react";

interface User{
    name: string;
    age: number;
};
interface UserSearchProps{
 users:  User[]
};

interface UserSearchState{
    name:string;
    user:User | undefined ;
}

class UserSearch extends Component<UserSearchProps>{

    state: UserSearchState ={
        name:'',
        user: undefined,
    }
    
     onClick = () =>{
        const foundUser = this.props.users.find((user)=>{
            return user.name === this.state.name;
            
        }
        );
        this.setState ({setUser:foundUser});
        
    }

    

    render() {
     

        const {user,name} = this.state

        return <div>User Search
        <input value={name}  onChange={(e) =>this.setState ({name:e.target.value})} />
             <button onClick={this.onClick}>Find Guest</button>
             
         <div>{user&&user.name}</div>
         <div>{user&&user.age}</div>
     </div>
    }

};

export default UserSearch;