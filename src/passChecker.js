// Functions

function passwordIsValid(password) {
  let re;

  try {
    if(password == "") {
      throw('Password should exist');
    }
    if(password != "") {
      if(password.length <= 8) {
        throw('Password should be longer than than 8 characters');
      }
    }
    re = /[a-z]/g;
    if(password.match(re) == null) {
      throw('Password should have at least one lowercase letter');
    }
    re = /[A-Z]/g;
    if(password.match(re) == null) {
      throw('Password should have atleast one uppercase letter');
    }
    re = /[0-9]/g;
    if(password.match(re) == null) {
      throw('Password should have atleast one digit');
    }
    re = /[!@#$%^&*+]/g;
    if(password.match(re) == null) {
      throw('Password should have atleast one special character');
    }

  } catch(error) {
      console.log(error)
    }
}

function passwordIsOk(password) {

  if(password != '' && password.length > 8) {
    if(password.match(/[a-z]/g) != null || password.match(/[A-Z]/g) != null || password.match(/[0-9]/g) != null || password.match(/[!@#$%^&*+]/g) != null) {
      return true;
    }
  }
  return false;
}

passwordIsValid('Qw12345hg6*');
console.log(passwordIsOk('t@dsMan1a'));

module.exports = {
  passwordIsValid,
  passwordIsOk,
}
