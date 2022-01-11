import * as UserType from './user.types';

export const setCheckedSMS = (value) => ({
  type: UserType.SET_SMS_SEND,
  payload: { value }
});

export const setCheckedEmail = (value) => ({
  type: UserType.SET_EMAIL_SEND,
  payload: { value }
});

export const profileSaveStart = (value, history) => ({
  type: UserType.PROFILE_SAVE_START,
  payload: { value, history }
});

export const profileSaveSuccess = (data) => ({
  type: UserType.PROFILE_SAVE_SUCCESS,
  payload: { data }
});

export const profileSaveFail = (err) => ({
  type: UserType.PROFILE_SAVE_FAIL,
  payload: { err }
});

export const sendStripePaymentEmail = (paymentType, firstname, email) => ({
  type: UserType.SEND_STRIPE_PAYMENT_EMAIL,
  payload: { paymentType, firstname, email }
});

export const subscribeUser = (sessionId) => ({
  type: UserType.SUBSCRIBE_USER_START,
  payload: { sessionId }
});

export const subscribeUserSuccess = (data) => ({
  type: UserType.SUBSCRIBE_USER_SUCCESS,
  payload: { data }
});

export const subscribeUserFail = (error) => ({
  type: UserType.SUBSCRIBE_USER_FAIL,
  payload: { error }
});

export const cancelSubscription = () => ({
  type: UserType.UN_SUBSCRIBE_START,
  payload: {}
});

export const cancelSubscriptionSuccess = (data) => ({
  type: UserType.UN_SUBSCRIBE_SUCCESS,
  payload: { data }
});

export const cancelSubscriptionFail = (error) => ({
  type: UserType.UN_SUBSCRIBE_FAIL,
  payload: { error }
});

export const fetchProfileStart = (userid) => ({
  type: UserType.FETCH_PROFILE_START,
  payload: { userid }
});

export const fetchProfileSuccess = (data) => ({
  type: UserType.FETCH_PROFILE_SUCCESS,
  payload: { data }
});

export const fetchProfileFail = (error) => ({
  type: UserType.FETCH_PROFILE_FAIL,
  payload: { error }
});
