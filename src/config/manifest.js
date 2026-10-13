const port = 3000
const clientId = process.env.CLIENT_ID
const apiHost = `https://bfzr-003.sandbox.us01.dx.commercecloud.salesforce.com`
const apiPath = `s/SiteGenesis/dw/shop/v21_10/customers`
const apiEndpoint = `${apiHost}/${apiPath}`

export {
    port,
    clientId,
    apiEndpoint
}