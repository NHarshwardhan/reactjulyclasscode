import apiClient from "./apiClient";

const getUsers = ()=> apiClient.get('/users')
const createUser = (user)=>apiClient.post('/users',user)
const updateUser = (id,user)=>apiClient.put(`/users/${id}`, user)


export default  {getUsers,createUser,updateUser}
