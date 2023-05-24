import { useState } from 'react';
import { useEffect } from 'react';
import { set, useForm } from 'react-hook-form'

export function UsersForm({addUser, selectedUser, editUser, form, formClose}) {

    const { register, handleSubmit, reset } = useForm();
    
    const emptyuser = {
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        password: "",    
    }

    useEffect(() => {
        if(selectedUser) {
            reset(selectedUser)
        } else {
            reset(emptyuser)
        }
    }, [selectedUser])

    const submit = data => {
        if(selectedUser) {
            editUser(data)
            closeForm()
        } else {
            addUser(data)
            closeForm()
        }
    }

    const closeForm = () => {
        formClose()
    }


    return(
        <div className="container-form" style={{display: form}}>
          <form onSubmit={handleSubmit(submit)}>
            <button className='btn-close' onClick={() => closeForm()}>X</button>
            <div className="container-input">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' {...register("first_name")} />
            </div>

            <div className="container-input">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id='lastname'{...register("last_name")}/>
            </div>

            <div className="container-input">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register("email")} />
            </div>

            <div className="container-input">
            <label htmlFor="date">Birthday</label>
            <input type="date" id='date' {...register("birthday")} />
            </div>

            <div className="container-input">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register("password")}/>
            </div>

            <div className="container-btn">
                <button type="submit">Create</button>
            </div>
        </form>
        </div>
    )

}