import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    book: {},
    books: [],
    prize: {},
    prizes: [],
    activePrize: {},
    activities: [],
    token: currentToken || '',
    user: currentUser || {}
  },
  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    },
    SET_BOOK(state, book){
      state.book = book;
    },
    WIPE_BOOK(state){
      state.book = {}
    },
    ADD_BOOKS_TO_ARRAY(state, bookArray) {
      state.books = bookArray;
    },
    ADD_ACTIVITIES_TO_ARRAY(state, activitiesArr){
      state.activities = activitiesArr;
    },
    ADD_PRIZES_TO_ARRAY(state, prizesArr) {
      state.prizes = prizesArr;
    },
    SET_ACTIVE_PRIZE(state, prize) {
      state.activePrize = prize;
    },
    WIPE_ACTIVE_PRIZE(state){
      state.activePrize = {};
    }

  }
})
