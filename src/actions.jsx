

const setAuth = (obj) => {
  return {
    type: "SET_AUTH",
    payload: {
      auth: {
        authorize: obj.authorize || false,
        token: obj.token || null,
        isActive: obj.isActive || false,
        store_uuid: obj.store_uuid || null,
        secret: obj.secret || null,
        kyc:obj.kyc || false
      }
    }
  }
}


const setUserOptions = (obj) => {
  return {
    type: "SET_USER_OPTIONS",
    payload: {
      ...obj
    }
  }
}

export default {
  setAuth,
  setUserOptions
}
