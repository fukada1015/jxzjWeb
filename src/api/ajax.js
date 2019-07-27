import axios from 'axios'
export default function ajax(url,type='GET'){
  return new Promise(function (resolve,reject){
    let promise
    if(type === 'GET'){
      // let strdata = ''
      // Object.keys(data).forEach(key =>{
      //   strdata += key + '=' + data[key] +'&'
      // })
      // if(strdata!== ''){
      //   strdata = strdata.substring(0,strdata.lastIndexOf('&'))
      //   url = url + '?' + strdata
      // }
    promise =axios.get(url)
    }else{
      promise = axios.post(url)
    }
    promise.then((response)=>{
        resolve(response.data)
    })
      .catch((error)=>{
        reject(error)
      })
  })
}
