import axios from "axios";

class BookService {

  baseUrl = 'http://localhost:8080/book'
  token = localStorage.getItem('token');

  authAxios = axios.create({
    baseURL: this.baseUrl,
    headers: {
      token: `${this.token}`
    }
  })

  addNewBook = (userData) => {

    console.log(this.token);
    return this.authAxios.post(`/add/`, userData);
  }

  getAllBooks() {
    return axios.get(`${this.baseUrl}` + "/getall");
  }

  searchByBookName(search) {
    console.log(search);
    return axios.get(`${this.baseUrl}` + "/searchByName?name=" + search)
  }

  getAllInIncreasingOrder() {
    return axios.get(`${this.baseUrl}` + "/getBookByAscendingPrice");
  }

  getAllInDecreasingOrder() {
    return axios.get(`${this.baseUrl}` + "/getBookByDescendingPrice");
  }

}

export default new BookService();