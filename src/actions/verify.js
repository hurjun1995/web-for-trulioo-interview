import {
  CUSTOMER_VERIFY_SUCCESS,
  CHECK_BOX_TOGGLED,
  CUSTOMER_DATA_SET
} from "../types";
import api from "../api";

export const verifySuccess = verifiedCustomerData => ({
  type: CUSTOMER_VERIFY_SUCCESS,
  verifiedCustomerData
});

export const checkBoxToggled = key => ({
  type: CHECK_BOX_TOGGLED,
  key
});

export const customersDataSet = customerId => ({
  type: CUSTOMER_DATA_SET,
  customerId
});

export const verify = (customerData, checkedCustomersId = []) => dispatch =>
  api.customer
    .verify(customerData, checkedCustomersId)
    .then(verifiedCustomerData => {
      dispatch(verifySuccess(verifiedCustomerData));
    });

export const checkBoxToggle = key => dispatch => dispatch(checkBoxToggled(key));

export const setCustomersData = customerId => dispatch =>
  dispatch(customersDataSet(customerId));
