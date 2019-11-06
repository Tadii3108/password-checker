// Functions

function passwordIsValid(password) {
  let re;

  try {
    if(password == "") {
      throw('Password cannot be blank');
    }
    if(password != "") {
      if(password.length <= 8) {
        throw('Password must be longer than 8 characters');
      }
    }
    re = /[a-z]/;
    if(!re.test(password)) {
      throw('Password must contain atleast one lowercase letter');
    }
    re = /[A-Z]/;
    if(!re.test(password)) {
      throw('Password must contain atleast one uppercase letter');
    }
    re = /[0-9]/;
    if(!re.test(password)) {
      throw('Password must contain atleast one digit');
    }
    re = /[!@#$&()-`./+,"]/;
    if(!re.test(password)) {
      throw('Password must contain atleast one special character');
    }

  } catch(error) {
      console.log(error)
    }
}

function passwordIsOk(password) {

  if(password != '' && password.length > 8) {
    if(password.match(/[a-z]/) != null || password.match(/[A-Z]/) != null || password.match(/[0-9]/) != null || password.match(/[!@#$^&*()`{}+_%'"]/) != null) {

      return true;

    } else {

      return false;

    }
  }
}

passwordIsValid('Q12345qwerty');
console.log(passwordIsOk('Q12345qwerty!'));

module.exports = {
  passwordIsValid,
  passwordIsOk
}
