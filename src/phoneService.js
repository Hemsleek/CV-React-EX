import axios from 'axios'

const basePoint = 'http://localhost:3001/api/persons/'


export default {
    
  get () {
    return axios(basePoint)
  },

  add (data) {
    return axios.post(basePoint, data)
  },

  del(id){
    return axios.delete(basePoint+id)
  },
  update(id,data){
    return axios.put(basePoint+id,data)
  }
}