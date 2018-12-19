let token = '';

const getOptions = (method, data) => {
  const options = {
    method, 
    headers: {}
  };
  console.log(token);

  if(data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if(token) {
    options.headers.Authorization = token;
  }

  return options;
};

export default {
  setToken(t) {
    token = t;
  },

  signUp(profile) {
    return fetch('/api/auth/signUp', getOptions('POST', profile))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },

  signIn(credentials) {
    return fetch('/api/auth/signIn', getOptions('POST', credentials))
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            return Promise.reject(error);
          });
      });
  },
  
  getJokes(searchTerm = '') {
    return fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, { headers: { Accept:'application/json' } })
      .then(response => response.json());
  },
  
  addJoke(joke) {
    return fetch('/api/jokes', getOptions('POST', joke))
      .then(response => response.json());
  },
  
  getRatings() {
    return fetch('/api/ratings', getOptions('GET'))
      .then(response => response.json());
  },

  addRating(rating) {
    return fetch('/api/ratings', getOptions('POST', rating))
      .then(response => response.json());
  },

  //is the api different, not using token? 
  getMyJokes() {
    return fetch('/api/jokes', getOptions('GET'))
      .then(response => response.json());
  },

  getRateJokes(rateId) {
    return fetch(`/api/jokes/${rateId}`, { headers: { Accept:'application/json' } })
      .then(response => response.json());
  },

  deleteMyJoke(id) {
    return fetch(`/api/jokes/${id}`, getOptions('DELETE'))
      .then(response => response.json());
  },


  getProfiles() {
    return fetch('/api/profiles', getOptions('GET'))
      .then(response => response.json());
  },

  addSearchJoke(joke) {
    return fetch('/api/jokes', getOptions('POST', joke))
      .then(response => response.json());    
  }

};