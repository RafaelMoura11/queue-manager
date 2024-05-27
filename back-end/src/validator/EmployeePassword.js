class EmployeePassword {
    constructor(password) {
      this.validatePassword(password); 
      this.email = password; 
    }
  
    validatePassword(password) {
      if (!password) {
        throw new Error('Password field is empty.');
      }
  
      if (typeof password !== 'string') {
        throw new Error('Password must be a string.');
      }
  
      if (password.length < 8 || password.length > 50) {
        throw new Error('Password must be between 8 and 50 characters long.');
      }
  
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*()]/.test(password);
  
      if (!hasUppercase || !hasLowercase || !hasNumber || !hasSymbol) { //aqui ele obriga caracteres especiais, aumentando a segurança (obrigatorio) 
        throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special symbol.');
      }
    }
  }
  