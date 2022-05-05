import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8001"
    })

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers = {
            'Authorization': `Bearer ${token}`
          }
        }
        return config;
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
        throw error;
      }
    )
  }

  login = async (user) => {
    try {
      const { data } = await this.api.post('/auth/login', user);
      localStorage.setItem('token', data.token)
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  signup = async (signupInfo) => {
    try {
        const { data } = await this.api.post("/auth/signup", signupInfo)
        return data;
    } catch (error) {
        throw error.response;
    }
  }

  addProduct = async (title) => {
    try {
      const { data } = await this.api.post('/products', { title });
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  getProducts = async () => {
    try {
      const { data } = await this.api.get('/products')
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  updateProduct = async (id, product) => {
    try {
      await this.api.put(`/products/${id}`, product);
    } catch (error) {
      throw error.response;
    }
  }

  deleteProduct = async (id) => {
    try {
      await this.api.delete(`/products/${id}`)
    } catch (error) {
      throw error.response;
    }
  }

  getProfile = async (id) => {
    try {
      const {data} = await this.api.get(`/user/${id}`);
      return data
    } catch (error) {
      throw error.response;
    }
  }

  getUser = async (id) => {
    try {
      const {data} = await this.api.get(`/user/${id}`);
      return data
    } catch (error) {
      throw error.response;
    }
  }

  updateImage = async (file) => {
    try {
      const imgData = new FormData();
      imgData.append('image', file);

      const {data} = await this.api.put('/user/image', imgData);
      return data;
    } catch (error) {
      throw error.response;
    }
  }

}

export default new Api();