import axios from 'axios';
import { auth } from '../firebase';
import { getAuthToken } from '../utils/authHelper';

import { API_BASE_URL } from '../config';

const PAYMENTS_API_URL = `${API_BASE_URL}/payments`;

const getAuthHeaders = async () => {
  let localUser = null;
  const saved = localStorage.getItem('vb_local_user');
  if (saved) {
    try {
      localUser = JSON.parse(saved);
    } catch (e) {}
  }
  
  const token = await getAuthToken(localUser);
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const createOrder = async (amount, type = 'deposit') => {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.post(`${PAYMENTS_API_URL}/create-order`, { amount, currency: 'INR', type }, headers);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.post(`${PAYMENTS_API_URL}/verify-payment`, paymentData, headers);
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

export const getPaymentHistory = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await axios.get(PAYMENTS_API_URL, headers);
    return response.data;
  } catch (error) {
    console.error('Error fetching payment history:', error);
    throw error;
  }
};
