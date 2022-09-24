import {
    _getMerchants,
    _getProducts,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getMerchants(),
      _getProducts(),
    ]).then(([merchants, products]) => ({
      merchants,
      products,
    }))
  }