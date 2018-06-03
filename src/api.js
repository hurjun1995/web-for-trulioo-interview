/* eslint-disable */
const mockUsers = require("./mockData/mockUsers");

export default {
  user: {
    login: credentials => {
      if (
        mockUsers.hasOwnProperty(credentials.email) &&
        mockUsers[credentials.email].password === credentials.password
      ) {
        return Promise.resolve({
          exists: true,
          user: mockUsers[credentials.email]
        });
      }
      return Promise.reject({
        exists: false,
        error: { message: "User does not exist. Please try again." }
      });
    }
  }
};
