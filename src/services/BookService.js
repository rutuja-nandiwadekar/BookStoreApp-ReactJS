import axios from "axios";

class BookService {

    baseUrl = 'http://localhost:8080/book'


    addNewBook = (bookData) => {

        console.log(bookData);
        return axios.post(`${this.baseUrl}`+ "/add", bookData);
    }

    getAllBooks() {
    
        return axios.get(`${this.baseUrl}` + "/getall");
      }

}

export default new BookService();