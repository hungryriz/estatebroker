function makeRequest(url, method = 'post', data = {} , addHeaders = true) {

    let config = {
        url: url,
        method: method
    }

    let headers = {}
    let store
    if(addHeaders) {
        store = JSON.parse(window.localStorage.getItem('store'))
        headers = {   
            'enctype' : 'multipart/form-data',
            Authorization: `Bearer ${store.user.accessToken}`
        }
        config.headers = headers
    }

    if(data) {
        config.data = data
    }

    return axios(config)
}
export { makeRequest }