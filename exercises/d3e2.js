const account = {
  username: 'legolas',
  email: 'legolas@thefellowship.com',
  password: 'elf4life'
}

export class AppError extends Error {
  constructor(message, code) {
    super(message)
    this.code = code
  }
}

export class Account {
  static updateUsername(newUsername, password) {
    // If newUsername is not given, throw an AppError with code 400 (Bad Request)
    // If password is not given, throw an AppError with code 401 (Unauthorized)
    // If password is given but not correct, throw an AppError with code 403 (Forbidden)
    // If newUsername is given and password is correct, update the username and return the new username
  }
}
