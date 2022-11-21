import React,{useState, useEffect} from "react";
import axios from "axios";


const Example = () => {
    const[users, setUsers]= useState()
    const[text, setText]= useState()
    const[suggestions, setSuggestions]= useState()

    useEffect(() =>{
        const loadUsers = async(text) => {
            const response = await axios.get("http://localhost:5000/users");
            setUsers(response.data.data)
        }
        loadUsers()
    }, []);

    console.log(users)
 
const onChangeHandler =()=>{
    let matches = users.filter((user)=> {
        const regex= new RegExp(`${text}`,"gi")
        return user.name.match(regex)
    })
    setSuggestions(matches) 
           
}
//      const onChangeHandler =(text) => {
//       let matches =[]
//       if(text.lenght>0){
//         matches = users.filter(user=>{
//           const regex= new RegExp(`${text}`,"gi")
//           return user.name.match(regex)
//         })
//       }
//       setSuggestions(matches)
//       setText(text)
//   }

 

    return(
        <div className="contain">
            <h2 style={{textAlign:'center'}}>sample </h2>
            <input
             placeholder="search.."
            //  value={text}
             onChange={((e)=> onChangeHandler(e.target.value))}
             style={{marginLeft:'500px'}}
            />
            {suggestions && suggestions.map((user, index) =>
             <div key={index}>
                <h5>{user.name}</h5>
             </div>
            )}
        </div>
    )
}

export default Example;