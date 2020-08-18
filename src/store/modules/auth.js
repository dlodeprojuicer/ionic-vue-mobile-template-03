import axios from "axios";

const appName = "myAwsomeApp";

const state = {
  loginToken: null,
  authError: false
}

const getters = {
  loginToken({ loginToken }) {
    return loginToken || sessionStorage.getItem(`${appName}_token`);
  },
  authError({ authError }) {
    return authError;
  },
}

const mutations = {
  loginToken(state, token) {
    state.loginToken = token;
    sessionStorage.setItem(`${appName}_token`, token);
  }
}

const actions = {
  logout(context) {
    return new Promise((resolve) => {
      context.commit("loginToken", null);
      localStorage.clear();
      resolve();
    });
  },
  login(context, request) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${context.getters.apiUrl}/login`, request)
        .then(() => {
          // handle response
        })
        .catch(error => {
          reject(error.message);
        });
    });
  }
}

export { state, getters, mutations, actions }
