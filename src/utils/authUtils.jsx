import helperAPI from './Index'


// Authentication API functions
const AuthApi = async (body, type) => {
   try {
      
      const res = await helperAPI.postRequest(`api/auth/${type}`, {
         ...body,
      })
      return res
   } catch (err) {
      return err
   }
}

// User API functions
const UserApi = async (body, type) => {
   try {
      const res = await helperAPI.postRequest(`api/${type}`, {
         ...body,
      })
      return res
   } catch (err) {
      
   }
}

// Get user roles API function
const getRoles = async () => {
   try {
      const res = await helperAPI.getRequest('/api/auth/roles')
      return res
   } catch (err) {
  
      return false
   }
}
export { AuthApi, getRoles, UserApi }
