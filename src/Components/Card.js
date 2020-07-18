import React from "react";
import PropTypes from 'prop-types'
import styles from '../Styles.module.css'
import {generateId} from "../Database";
import SuperExpressive from 'super-expressive';

const Card = ({name, email, age, id}) => {

    const checkMatch = (regex, string) => {
        return Boolean(string.match(regex))
    }

    const stripRegex = (regex, string) => {
        if (checkMatch(regex, string)) {
            return string.replace(regex, "")
        } else {
            return string
        }
    }


    const checkEmail = (email) => {
        const emailRegex = SuperExpressive()
            .zeroOrMore
            .anyChar
            .string("@")
            .zeroOrMore
            .anyChar
            .string(".com")
            .toRegex()
        return Boolean(email.match(emailRegex))
    }


    const checkAge = (age) => {
        return Number.isInteger(age) && age > 0 && age < 120
    }

    return (
        <div className={styles.Card}>
            <h2 className={`${styles.CardField} ${styles.CardFieldName}`}>
                {stripRegex(generateId()[1], name)}
            </h2>
            <p className={styles.CardField}>
                {checkAge(age) ? age : "Invalid Age"}
            </p>
            <p className={styles.CardField}>
                {checkEmail(email) ? email : "Invalid Email"}
            </p>
            <p className={styles.CardField}>
                {id}
            </p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
}

export default Card