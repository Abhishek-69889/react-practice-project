import React, { useState } from 'react'

const Object = () => {
    const [user, setUser] = useState({name:"Abhishek",age:20});

    const  update = ()=>{
      const newuser = {...user};
      newuser.name="Abhi",
      newuser.age=22;
      setUser(newuser);
    }
  return (
    <div>
      <h1>{user.name} of age  {user.age}</h1>
      <button onClick={update}>Change user</button>
    </div>
  )
}

export default Object
