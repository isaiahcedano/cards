import React from "react";
import Card from "./Components/Card";
import styles from './Styles.module.css'

const CardList = ({cardDatabase}) => {
    return (
        <div className={styles.CardList}>
            {
                Object.entries(cardDatabase).map((user, index) => {
                    return <Card key={index}
                                 name={user[0]}
                                 age={user[1].age}
                                 email={user[1].email}
                                 id={user[1].id}/>
                })
            }
        </div>
    )
}

export default CardList