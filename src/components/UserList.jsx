import axios from "axios";
import { useState, useEffect} from "react";

export function UserList({usersList, deleteUser, selectUser, formOpen}) {
   
    const openForm = () => {
        formOpen()
    }

    return(
        <div className="container-cards-main">
            <div className="container-cards">
            {usersList?.map(user => (
                    <div className="card-user" key={user.id}>
                        <div className="container-name">
                            <h2>{user.first_name} {user.last_name}</h2>
                        </div>
                        <div className="container-info">
                            <h4>Email</h4>
                            <h3>{user.email}</h3>
                            <h4>Birthday</h4>
                            <h3>{user.birthday}</h3>
                        </div>
                        <div className="container-btns">
                            <button className="btn-delete" onClick={() => deleteUser(user.id)}>Delete</button>
                            <button className="btn-edit" onClick={() => {
                                selectUser(user.id)
                                openForm()
                            }}>Edit</button>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}