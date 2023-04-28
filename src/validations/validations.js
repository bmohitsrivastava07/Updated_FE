const validateName = (value, field) => {
  if (!value) {
    return "Required";
  } else if (!/^[A-Za-z]+$/i.test(value)) {
    return `Invalid ${field}`;
  }
};

const validateEmail=(value,field)=>{
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!value){
    return "Required";
  }
  else if (!regex.test(value)){
      return `Invalid ${field}`;
  }
}

const validatePhone=(value,field)=>{
  if (!value) {
    return "Please enter your phone number";
  }

  if (typeof value !== "undefined") {
      
    if (!RegExp(/^[0-9\b]+$/).test(value)) {
      return  `Please enter only number ${field}.`;
    }else if(value.length != 10){
       return  `Please enter valid phone number ${field}`
    }
}
}
const validatePassword = (value, field, passwordValue) => {
  if (!value) {
    return "Required";
  } else if (value.length > 6 || value.length < 6) {
    return "6 characters only allowed";
  } else if (field === "cpassword" && value !== passwordValue) {
    return "Passwords do not match.";
  }
};
// function password_validate(value,fi) {
  // return /[A-Z]/.test(p) && /[0-9]/.test(p) && !/[aeiou]/.test(p) && /^[@#][A-Za-z0-9]{7,13}$/.test(p);
// }


export default validateName;
export { validateEmail};
export {validatePhone};

export { validateName, validatePassword };
