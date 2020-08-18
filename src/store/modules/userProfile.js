// Everything related to the logged in user store

import axios from "axios";

const appName = "myAwsomeApp";

const state = {
  profile: null,
}

const getters = {
  profile({ profile }) {
    return profile || JSON.parse(localStorage.getItem(`${appName}_profile`)) || {};
  }
}

const mutations = {
  profile(state, data) {
    state.profile = data;
    localStorage.setItem(`${appName}_profile`, JSON.stringify(data));
  },
}

const actions = {
  profile(context, request) {
    return new Promise((resolve, reject) => {
      axios
        .post("<url_endpoint>", request)
        .then(data => {
          context.commit("profile", data);
          resolve();
        })
        .catch(error => {
          reject(error.message);
        });
    });
  },
}

export { state, getters, mutations, actions }
