let token = '';

const getOptions = (method, data) => {
  const options = {
    method, 
    headers: {}
  };

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
  getRatings() {
    return fetch('/api/ratings', getOptions('GET'))
      .then(response => response.json());
  },

  getJokes(searchTerm = '') {
    return fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, { headers: { Accept:'application/json' } })
      .then(response => response.json());
  },

  addJoke(joke) {
    return fetch('/api/jokes', getOptions('POST', joke))
      .then(response => response.json());
  },
  addRating(rating) {
    return fetch('/api/ratings', getOptions('POST', rating))
      .then(response => response.json());
  }
};