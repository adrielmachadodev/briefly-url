export const ValidationInputUrl = (form, setError) => {
    if(!form.originUrl) return setError((prevState) => ({...prevState, originUrl:'La URL está vacía'}))
    else if (!/^https:\/\/.*[\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{3,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form.originUrl)) return setError((prevState) => ({...prevState, originUrl:'La URL es inválida'}))
        else setError((prevState) => ({...prevState, originUrl:''}))

    if (!/^[a-zA-Z0-9]{3,16}$/.test(form.shortUrl)) return setError((prevState) => ({...prevState, shortUrl:'La URL es inválida'}))
        else setError((prevState) => ({...prevState, shortUrl:''}))
}

export const ValidationInputLogin = (form, setError) => {
    if(!form.email) setError((prevState) => ({...prevState, email:'El Email está vacío'}))
    else 
        if(!/^[a-zA-Z0-9._-]{3,35}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(form.email)) setError((prevState) => ({...prevState, email:'El Email es inválido.'}))
        else setError((prevState) => ({...prevState, email:''}))

    if(!form.password) setError((prevState) => ({...prevState, password:'La contraseña está vacía.'}))
    else {
        if(!(17 > form.password.length && form.password.length > 5)) setError((prevState) => ({...prevState, password:'La contraseña debe tener entre 6 y 16 caracteres.'}))
        else 
            if(!/[\d]/.test(form.password)) setError((prevState) => ({...prevState, password:'La contraseña debe contener al menos un número.'}))
            else setError((prevState) => ({...prevState, password:''}))
    }
}

export const ValidationInputRegister = (form, setError) => {
    if(!form.email) setError((prevState) => ({...prevState, email:'El Email está vacío'}))
    else 
        if(!/^[a-zA-Z0-9._-]{3,35}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(form.email)) setError((prevState) => ({...prevState, email:'El Email es inválido.'}))
        else setError((prevState) => ({...prevState, email:''}))

    if(!form.password) setError((prevState) => ({...prevState, password:'La contraseña está vacía.'}))
    else {
        if(!(17 > form.password.length && form.password.length > 5)) setError((prevState) => ({...prevState, password:'La contraseña debe tener entre 6 y 16 caracteres.'}))
        else 
            if(!/[\d]/.test(form.password)) setError((prevState) => ({...prevState, password:'La contraseña debe contener al menos un número.'}))
            else setError((prevState) => ({...prevState, password:''}))
    }
    
    if(!form.username) setError((prevState) => ({...prevState, username:'El username está vacío.'}))
    else {
        if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(form.username)) setError((prevState) => ({...prevState, username:'El username no puede contener caracteres especiales'}))
        else {
            if(!/^.{4,12}$/.test(form.username)) setError((prevState) => ({...prevState, username:'El username debe tener entre 4 y 12 caracteres.'}))
            else setError((prevState) => ({...prevState, username:''}))
        }
    }
}

export const ValidationInputEditUrl = (form, setError) => {
    if(!form) return setError('La URL está vacía')
    else if (!/^https:\/\/.*[\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{3,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form)) return setError('La URL es inválida')
        else setError('')
}