// In services/BackendService.js or wherever you've defined this function
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchMessageFromBackend = async () => {
    try {
        const response = await axios.get(`${API_URL}recipes`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the data:', error);
        throw new Error('Failed to fetch message from backend'); // Propagate error
    }
};

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch the recipes.");
  }
};

export const registerNewUser = async (name, email, username, password) => {
  try {
    await axios.post(`${API_URL}/users`, {name, email, username, password});
    return true;
  } catch (error) {
    throw new Error("Failed to register new user.");
  }
};

export const authenticateUser = async (username, password) => {
  try { 
    await axios.post(`${API_URL}/users/login`, { username, password });
    return true;
  } catch (error) {
    throw new Error("Failed to authenticate user.");
  }
};

// export const fetchRecipeById = async (id) => {
//     try {
//         const response = await axios.get(`${API_URL}${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('There was an error fetching the recipe:', error);
//         throw new Error('Failed to fetch recipe from backend');
//     }
// };