import React from "react";
import styles from "../Styles.module.css";
import {useForm} from "react-hook-form";

const DuplicateFormUser = ({submit}) =>  {

    const {handleSubmit, register} = useForm()

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.DuplicateUserForm}>
            <label>Duplicate User</label>
            <div className={styles.FormField}>
                <p className={styles.FormTextField}>ID:</p>
                <input name="DuplicateUserID"
                       type="number"
                       ref={register({
                           required:true,
                           maxLength:8,
                       })}
                       className={`${styles.FormInput} DuplicateUserFormInput`}/>
            </div>
            <button>Duplicate User</button>
        </form>
    )
}

export default DuplicateFormUser