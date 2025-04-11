exports.handler = async (event) => {
    console.log("List of Dessert");
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify([{
          image: {
            desktop: "https://d30997lbsy3es6.cloudfront.net/image-waffle-desktop.jpg",
          },
          name: "Waffle with Berries",
          category: "Waffle",
          price: 6.5,
          id: 1,
        },
        {
          image: {
            desktop:
              "https://d30997lbsy3es6.cloudfront.net/image-creme-brulee-desktop.jpg",
          },
          name: "Vanilla Bean Crème Brûlée",
          category: "Crème Brûlée",
          price: 7.0,
          id: 2,
        },
        {
          image: {
            desktop: "https://d30997lbsy3es6.cloudfront.net/image-macaron-desktop.jpg",
          },
          name: "Macaron Mix of Five",
          category: "Macaron",
          price: 8.0,
          id: 3,
        },
        {
          image: {
            desktop:
              "https://d30997lbsy3es6.cloudfront.net/image-tiramisu-desktop.jpg",
          },
          name: "Classic Tiramisu",
          category: "Tiramisu",
          price: 5.5,
          id: 4,
        },
        {
          image: {
            desktop: "https://d30997lbsy3es6.cloudfront.net/image-baklava-desktop.jpg",
          },
          name: "Pistachio Baklava",
          category: "Baklava",
          price: 4.0,
          id: 5,
        },
        {
          image: {
            desktop:
              "https://d30997lbsy3es6.cloudfront.net/image-meringue-desktop.jpg",
          },
          name: "Lemon Meringue Pie",
          category: "Pie",
          price: 5.0,
          id: 6,
        },
        {
          image: {
            desktop: "https://d30997lbsy3es6.cloudfront.net/image-cake-desktop.jpg",
          },
          name: "Red Velvet Cake",
          category: "Cake",
          price: 4.5,
          id: 7,
        },
        {
          image: {
            desktop: "https://d30997lbsy3es6.cloudfront.net/image-brownie-desktop.jpg",
          },
          name: "Salted Caramel Brownie",
          category: "Brownie",
          price: 4.5,
          id: 8,
        },
        {
          image: {
            desktop:
              "https://d30997lbsy3es6.cloudfront.net/image-panna-cotta-desktop.jpg",
          },
          name: "Vanilla Panna Cotta",
          category: "Panna Cotta",
          price: 6.5,
          id: 9,
        }]),
    };
};
