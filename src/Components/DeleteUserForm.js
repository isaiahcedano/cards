import React from 'react'
import styles from "../Styles.module.css";
import {useForm} from "react-hook-form";

const DeleteUserForm = ({submit}) => {

    const {handleSubmit, register} = useForm()

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.DeleteUserForm}>
            <label>Delete User</label>
            <div className={styles.FormField}>
                <p className={styles.FormTextField}>ID:</p>
                <input name="DeleteUserID"
                       type="number"
                       ref={register({
                           required:true,
                           maxLength:8
                       })}
                       className={`${styles.FormInput} DeleteUserFormInput`}/>
            </div>
            <button>Delete User</button>
        </form>
    )
}

export default DeleteUserForm