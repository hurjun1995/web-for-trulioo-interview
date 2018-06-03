/* eslint-disable */
const mockUsers = require("./mockData/mockUsers");

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function externalVerficationAPI(customers) {
  customers.map(customer => {
    customer.verified = Math.floor(Math.random() * 2) === 0 ? "true" : "false";
    customer.lastVerifiedOn = formatDate(Date.now());
  });
  return Promise.resolve(customers);
}

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
  },
  customer: {
    verify: customers => externalVerficationAPI(customers)
  }
};
