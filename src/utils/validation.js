export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email no puede ser vacío.';
    if (!re.test(email)) return 'Ooops! Se necesita un correo válido.';
  
    return '';
  };
  
  export const passwordValidator = (password) => {
    if (!password || password.length <= 0) return 'Contraseña no puede ser vacío.';
  
    return '';
  };

  export const repeatPasswordValidator = (repeatPassword,password) =>{
    
    console.log(repeatPassword)
    if (!repeatPassword || repeatPassword.length <= 0) return 'Contraseña no puede ser vacío.'
    if (repeatPassword !== password) return 'La contraseña es diferente'
    if (repeatPassword === password) return ''
  }

  export const nameValidator = (name) =>{
    if (!name || name.length <= 0) return 'Nombre no puede ser vacío.'
  }

  export const lastNameValidator = (lastName) =>{
    if (!lastName || lastName.length <= 0) return 'Nombre no puede ser vacío.'
  }

  export const phoneValidator = (phone) =>{
    const re = /[a-zA-Z0-9]+/
    if (!phone || phone.length <= 0) return 'Teléfono no puede ser vacío.'
    if (!re.test(phone)) return 'Ooops! Se necesita un teléfono válido.';
  }
  export const birthDateValidator = (birthDate) =>{
   
    if (!birthDate || birthDate.length <= 0) return 'Fecha no puede ser vacío'
   
  }

  export const genderValidator = (gender) =>{
    if (gender === '1') return 'Sexo no puede ser vacío.'
  }
  export const checkValidator = (isSelected) =>{
    if (isSelected === false) return 'Debe aceptar los términos y condiciones'
    
  }

 