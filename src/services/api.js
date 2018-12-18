let token = '';

const getOptions = (method, data) => {
  const options = {
    method, 
    headers: {}
  };

  if(data) {
    options.header['Content-Type'] = 'application/json';
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
  }
};

//   test() {
//     return fetch('/api')
//       .then(response => response.json());
//   }