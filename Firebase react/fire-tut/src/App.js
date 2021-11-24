import { useState, useEffect } from "react"
import './App.css';
import { db } from "./firebase-config";
import 'antd/dist/antd.css';
import { Button, Input } from 'antd';
import { collection, getDocs, addDoc, updateDoc,deleteDoc, doc } from "firebase/firestore"

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0)

  const [users, setusers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: name, age: Number(age) })
  }

  const updateUser = async (id, age)=>{
    const userDoc = doc(db, "users", id)
    const newField = {age : age + 1}
    await updateDoc (userDoc, newField)
  }

  const deleteUser = async (id) =>{
    const userDoc = doc(db, "users", id);
    await deleteDoc (userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">

      <Input style = {{width : "30%", marginTop : "5px"}} placeholder="Name..." onChange={(event) => {
        setName(event.target.value)
      }} />
      <Input style = {{width : "30%", margin : "5px"}} type="number" placeholder="Age..."  onChange={(event) => {
        setAge(event.target.value)
      }} />
      <Button style = {{margin : "4px"}} onClick={createUser}>Create User</Button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
            <Button style = {{margin : "2px"}} type= "primary" onClick = {()=>{updateUser (user.id, user.age)}}>Increase Age</Button>
            <Button type= "primary" onClick = {()=>{deleteUser (user.id,)}}>Delete User</Button>
          </div>

);
})}
    </div>
  );
}


export default App;
