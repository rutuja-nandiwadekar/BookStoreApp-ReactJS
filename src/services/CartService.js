import axios from 'axios'

class CartService{
    baseUrl = "http://localhost:8080/cart";


    authAxios = axios.create({
        baseURL:this.baseUrl,
        headers: {
            token:"test"
        }
      })

    addBookToCart(bookId){
        return this.authAxios.post('/insert/'+bookId)
    }

    getCartDetails(){
        return axios.get(`${this.baseUrl}`+"/getAllCart")
    }

    deleteCartItem(cartId){
        return axios.delete(`${this.baseUrl}`+"/delete/"+cartId)
    }

    updateCartQuantity(cartId,quantity){
        return axios.put(`${this.baseUrl}`+"/UpdateQuantity/"+cartId+"/"+quantity);
    }
}

export default new CartService();