// In services/BackendService.js or wherever you've defined this function
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';

export const fetchMessageFromBackend = async () => {
    try {
        const response = await axios.get(`${API_URL}recipes`);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the data:', error);
        throw new Error('Failed to fetch message from backend'); // Propagate error
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