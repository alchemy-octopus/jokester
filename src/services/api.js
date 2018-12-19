let ratings = null;

const getOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};


export default {
  getJokes() {
    return fetch('/api/jokes')
      .then(response => response.json());
  },  
  getJoke(id) {
    return fetch(`/api/jokes/${id}`)
      .then(response => response.json());
  },
  addJoke(joke) {
    return fetch('/api/jokes', getOptions('POST', joke))
      .then(response => response.json());
  },

  deleteJoke(id) {
    return fetch(`/api/jokes/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },
  updateJoke(joke) {
    return fetch(`/api/jokes/${joke.id}`, 
      getOptions('PUT', joke)
    )
      .then(response => response.json());
  },

  getRatings() {
    if(ratings) {
      return Promise.resolve(ratings);
    }
    else {
      return fetch('/api/ratings')
        .then(response => response.json())
        .then(fetchedRatings => {
          ratings = fetchedRatings;
          return ratings;
        });
    }
  }
};