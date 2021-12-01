import { useState} from 'react';

const useFetch = (baseUrl) => {
  const [loading, setLoading] = useState(true);

  const get = (url) => {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return {get, loading}; 

}

export default useFetch
