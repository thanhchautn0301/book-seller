export const fetcher = (url)=> fetch(url).then(async res=> {
    const rs = await res.json()
    if (res.status!== 200){
        return Promise.reject(rs)
    }else{
        return rs;
    }
})