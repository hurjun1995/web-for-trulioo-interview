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

function externalVerficationAPI(customers, checkedCustomersId) {
  let keys = Object.keys(customers);
  if (checkedCustomersId.length === 0) {
    checkedCustomersId = keys;
  }
  console.log(checkedCustomersId);
  keys.forEach(key => {
    if (
      customers.hasOwnProperty(key) &&
      checkedCustomersId.indexOf(key) !== -1
    ) {
      let c = customers[key];
      console.log(c);
      c.verified = Math.floor(Math.random() * 2) === 0 ? "true" : "false";
      c.lastVerifiedOn = formatDate(Date.now());
    }
  });
  console.log(customers);

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
    verify: (customers, checkedCustomersId) => {
      return externalVerficationAPI(customers, checkedCustomersId);
    }
  }
};
