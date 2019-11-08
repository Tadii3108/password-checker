// Tests

let { passwordIsValid, passwordIsOk } = require('../src/passChecker.js');

describe('Password is valid', function() {
  let password = "Q12345qwerty!";

  it('should exist', function() {
    expect(password).toBeTruthy();
  });
  it('should be longer than 8 characters', function() {
    expect(password.length).toBeGreaterThan(8);
  });
  it('should have atleast one lowercase letter', function() {
    expect(password).toMatch(/[a-z]/);
  });
  it('should have atleast one uppercase letter', function() {
    expect(password).toMatch(/[A-Z]/);
  });
  it('should have atleast one digit', function() {
    expect(password).toMatch(/[0-9]/);
  });
  it('should have atleast one special character', function() {
    expect(password).toMatch(/[!@#$%^&*+]/);
  });
});

describe('Password is ok', function() {
  let password = "Q12345qwerty!";

  it('should exist', function() {
    expect(password).toBeTruthy();
  });
  it('should be longer than 8 characters', function() {
    expect(password.length).toBeGreaterThan(8);
  });
  it('should have atleast one digit', function() {
    expect(password).toMatch(/[0-9]/);
  });
});
