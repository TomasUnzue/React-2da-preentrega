const products = [
    {
        id: '1',
        name: 'remera',
        price : 10000 , 
        category : 'remera',
        img :'https://e7.pngegg.com/pngimages/779/30/png-clipart-white-t-shirt-white-t-shirt.png',
        stock: 25,
        description: 'remera'
    },
    {
        id:'2',
        name: 'pantalon',
        price : 10000 ,
        category : 'pantalon',
        img : 'https://w7.pngwing.com/pngs/63/280/png-transparent-jeans-denim-slim-fit-pants-bell-bottoms-jeans-blue-fashion-boy-thumbnail.png' ,
        stock: 25,
        description: 'descripcion de Iphone 12'
    },
    {
        id: '3',
        name : 'buzo',
        price : 1000,
        category: 'buzo' ,
        img : 'https://estampadosmendoza.com.ar/wp-content/uploads/2017/04/buzo-liso-png.png' ,
        stock : 34 ,
        description : 'buzo' 
    },
    {
        id: '4',
        name : 'short',
        price : 1000,
        category: 'short' ,
        img : 'https://www.nicepng.com/png/full/919-9195958_shorts-png-png-shorts.png' ,
        stock : 34 ,
        description : 'short' 
    },
    {
        id: '5',
        name : 'medias',
        price : 1000,
        category: 'medias' ,
        img : 'https://e7.pngegg.com/pngimages/417/298/png-clipart-sock-hosiery-black-socks-image-file-formats-socks.png' ,
        stock : 34 ,
        description : 'medias' 
    },
    {
        id: '6',
        name : 'campera',
        price : 1000,
        category: 'campera' ,
        img : 'https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png',
        stock : 34 ,
        description : 'campera' 
    }

]
export const getProductById = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products)
        }, 500 )
    })
}

export const getElementById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}