// Tests
let { passwordIsValid, passwordIsOk } = require('../src/passChecker.js');

describe('Password is valid', function() {
  let password = "Q12345qwerty!";

  it('should exist', function() {
    expect(password).toBeTruthy();
  });
  it('should consist of more than 8 characters', function() {
    expect(password.length).toBeGreaterThan(8);
  });
  it('should contain atleast one lowercase letter', function() {
    expect(password).toMatch(/[a-z]/);
  });
  it('should contain atleast one uppercase letter', function() {
    expect(password).toMatch(/[A-Z]/);
  });
  it('should contain atleast one digit', function() {
    expect(password).toMatch(/[0-9]/);
  });
  it('should contain atleast one special character', function() {
    expect(password).toMatch(/[!@#$^&*()`{}+_%'"]/);
  });
});

describe('Password is ok', function() {
  let password = "Q12345qwerty!";

  it('should exist', function() {
    expect(password).toBeTruthy();
  });
  it('should consist of more than 8 characters', function() {
    expect(password.length).toBeGreaterThan(8);
  });
  it('should contain atleast one digit', function() {
    expect(password).toMatch(/[0-9]/);
  });
});
