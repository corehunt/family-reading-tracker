import axios from 'axios';



export default {

  // Book
  postBook(book) {
      return axios.post('/postBook', book);
  },

  getBooks() {
    return axios.get('/getBookCollection')
  },

  // Prize
  postPrize(prize) {
    return axios.post('/postPrize', prize);
  },

  getPrizes() {
    return axios.get('/getPrizes');
  },

  // Activity
  postActivity(activity) {
    return axios.post('/postActivity', activity);
  },

  getActivitiesByFam() {
    return axios.get('/getActivityByFam');
  },
  getActivitiesById(id){
    return axios.get(`/getActivityById/${id}`)
  }
}
