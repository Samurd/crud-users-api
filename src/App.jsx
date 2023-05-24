import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { UsersForm } from './components/UsersForm'
import { UserList } from './components/UserList'

function App() {

  const [usersList, setUserList] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  const [form, setForm] = useState("none")
    
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get("https://users-crud.academlo.tech/users/")
    .then(res => {
      setUserList(res.data)
    })
    .catch(error => console.error(error))
  }

  const addUser = (user) => {
    axios.post("https://users-crud.academlo.tech/users/", user)
    .then(() => getData())
    .catch(error => console.error(error))
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud.academlo.tech/users/${id}/`)
    .then(() => getData())
    .catch(error => console.error(error))
  }

  const selectUser = (id) => {
    axios.get(`https://users-crud.academlo.tech/users/${id}/`)
    .then(res => setUserSelected(res.data))
    .catch(error => console.error(error))
  }

  const editUser = (user) => {
    axios.put(`https://users-crud.academlo.tech/users/${user.id}/`, user)
    .then(() => getData())
    setUserSelected(null)
  }

  const formClose = () => {
    setForm("none")
  }

  const openForm = () => {
    setForm("flex")
  }

  return (
    <>
        <UsersForm 
    addUser={addUser}
    selectedUser={userSelected}
    editUser={editUser}
    form={form}
    formClose={formClose}
    />
    <div className="container-nav">
    <h1>Users</h1>
    <button onClick={() => setForm("flex")}>Add new user</button>
    </div>
    <UserList 
    usersList={usersList}
    deleteUser={deleteUser}
    selectUser={selectUser}
    formOpen={openForm}
     />
    </>
  )
}

export default App
