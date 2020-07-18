import SuperExpressive from 'super-expressive'


export const generateId = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    const regexID = SuperExpressive()
                        .char("*")
                        .char("*")
                        .char("*")
                        .char("*")
                        .word
                        .word
                        .word
                        .word
                        .digit
                        .digit
                        .digit
                        .digit
                        .word
                        .word
                        .word
                        .word
                        .toRegex()                
    let randomLetters = [
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
    ]
    let randomNumbers =
        `${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}`
    const id =
        `****${randomLetters[0]}${randomLetters[1]}${randomLetters[2]}${randomLetters[3]}${randomNumbers}${randomLetters[4]}${randomLetters[5]}${randomLetters[6]}${randomLetters[7]}`
    const idIdentification =
        `${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}`
    return [id, regexID, idIdentification]
}

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

export const Database =
    {
        "Isaiah Cedano****wWds5129vGOf":
            {
                age:31,
                email:"isaiahcedano123@gmail.com",
                id:generateId()[2],
            },
        "Alexandro Cedano****INmP1155oFUL":
            {
                age:34,
                email:"alexandrocedano123@gmail.com",
                id:generateId()[2],
            },
        "Jazmin Hans****kMLM2991mIfm":
            {
                age:43,
                email:"jazminhans@yahoo.com",
                id:generateId()[2],
            },
        "Chinin****vpSe7943SjmT":
            {
                age:17,
                email:"rocadurapolladura@gmail.com",
                id:generateId()[2],
            }
    }

export const addUser = (user, userData) => {
    let data = {id:generateId()[2]}
    Object.assign(data, userData)
    Database[`${user}${generateId()[0]}`] = data
} // The User Data should only have an email and an age

export const deleteUser = (id) => {
    let userToDelete = null
    Object.entries(Database).forEach(user => {
        if (id === user[1].id) {
            userToDelete = user[0]
        }
    })
    delete Database[userToDelete]
}

export const duplicateUser = (id) => {
    let data = {}
    let username = null
    let userID = null
    Object.entries(Database).forEach(user => {
        if (id === user[1].id) {
            userID = id
            username = user[0]
        }
    })
    Object.assign(data, Database[username])
    delete data.id
    addUser(`${stripRegex(generateId()[1], username)}`, data)
}
