import React from "react";
import AddUserForm from "./Components/AddUserForm";
import DeleteUserForm from "./Components/DeleteUserForm";
import styles from './Styles.module.css'
import DuplicateFormUser from "./Components/DuplicateFormUser";

const Forms = ({onAddUserAction, onDeleteUserAction, onDuplicateUserAction}) => {
    return (
        <div className={styles.Forms}>
            <AddUserForm submit={onAddUserAction}/>
            <DeleteUserForm submit={onDeleteUserAction}/>
            <DuplicateFormUser submit={onDuplicateUserAction}/>
        </div>
    )
}

export default Forms