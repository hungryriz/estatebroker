function makeRequest(url, method = 'post', addHeaders = true) {

    let config = {
        url: url,
        method: method
    }

    let headers = {}
    let store
    if(addHeaders) {
        store = JSON.parse(window.localStorage.getItem('store'))
        headers = { Authorization: `Bearer ${store.user.accessToken}` }
    }

    config.headers = headers
    return axios(config)

}
export { makeRequest }