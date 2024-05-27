class EmployeeEmail {
  constructor(email) {
    this.validateEmail(email);
    this.email = email;
  }

  validateEmail(email) {
    if (!email) {
      throw new Error('Email field is empty.');
    }

    if (typeof email !== 'string') {
      throw new Error('Email must be a string.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format. Please enter a valid email address.');
    }
  }
}
