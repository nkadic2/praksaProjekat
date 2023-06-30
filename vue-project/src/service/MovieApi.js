import axios from 'axios'

export default {
  /*export async function getMovieDetails({ id }) {
  const response = await axios.get(`${movie}/movie/${id}`)
  return response?.data
}*/
fetchMovieCollection (name) {
  return axios.get(`http://localhost:3000/movie?name=${this.name}`)
    .then(response => {
      return response.data
    })
},

/*fetchSingleMovie (id) {
  return axios.get(`http://localhost:3000/movie?id=${this.id}`)
    .then(response => {
      return response.data
    })
}*/
}