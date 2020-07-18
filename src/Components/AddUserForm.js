import React from 'react'
import {useForm} from 'react-hook-form'
import styles from '../Styles.module.css'

const AddUserForm = ({submit}) => {

    const {handleSubmit, register} = useForm()

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.AddUserForm}>
            <label>Add User</label>
            <div className={styles.FormField}>
                <p className={styles.FormTextField}>Name:</p>
                <input name="AddUserName"
                       type="text"
                       ref={register({
                           required:true,
                       })}
                       className={`${styles.FormInput} AddUserFormInput`}/>
            </div>

            <div className={styles.FormField}>
                <p className={styles.FormTextField}>Age:</p>
                <input name="age"
                       type="number"
                       ref={register({
                           required:true,
                           maxLength:3,
                       })}
                       className={`${styles.FormInput} AddUserFormInput`}/>
            </div>

            <div className={styles.FormField}>
                <p className={styles.FormTextField}>Email:</p>
                <input name="email"
                       type="email"
                       ref={register({
                           required:true,
                       })}
                       className={`${styles.FormInput} AddUserFormInput`}/>
            </div>
            <button>Add User</button>
        </form>
    )
}

export default AddUserForm