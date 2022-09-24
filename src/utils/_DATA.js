let merchants = {
    happy_farms: {
      id: "happy_farms",
      name: "Happy Farms",
      avatarURL: "https://semantic-ui.com/images/avatar/large/joe.jpg",
      reviews: [],
      products: ["8xf0y6ziyjabvozdd253nd", "5c9qojr2d1738zlx09afby", "f4xzgapq7mu783k9t02ghx"],
    }
  }
  
  let products = {
    "8xf0y6ziyjabvozdd253nd": {
      id: "8xf0y6ziyjabvozdd253nd",
      name: "Golden Apples",
      text: "Apples are the best!",
      merchant: "happy_farms",
      likes: [],
      reviews: [],
    },
    "5c9qojr2d1738zlx09afby": {
      id: "5c9qojr2d1738zlx09afby",
      name: "Golden Bananas",
      text: "Bananas are the best!",
      merchant: "happy_farms",
      likes: [],
      reviews: [],
    },
    "f4xzgapq7mu783k9t02ghx": {
      id: "f4xzgapq7mu783k9t02ghx",
      name: "Golden Carrots",
      text: "Carrots are the best!",
      merchant: "happy_farms",
      likes: [],
      reviews: [],
    }
  }
  
  export function _getMerchants () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...merchants}), 1000)
    })
  }
  
  export function _getProducts () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...products}), 1000)
    })
  }