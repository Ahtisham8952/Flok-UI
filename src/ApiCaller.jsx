import { useState } from 'react';

const ApiCaller = () => {
  const [error, setError] = useState('');

  const callApi = async (value) => {
    try {
      const response = await fetch('http://localhost:3000/graphql/', {
        method: 'POST',
        body: JSON.stringify({ query: value }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer TOKEN_HERE`
        },
      });
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw new Error('An error occurred during the API call');
    }
  };

  return { callApi };
};

export default ApiCaller;
