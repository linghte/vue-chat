
export const mockLogin = (username,password)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("success")
    }, 100);
  })
}