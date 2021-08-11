/**
 * 预售券商品信息处理类
 */
class Product {
    private static instance: any;
    private data: any;
    constructor(data: any) {
        if(Product.instance){
            return Product.instance
        }
        Product.instance = this;
        this.data = data;
    }

    add(){

    }

    delete(){

    }

    remove(){

    }

    update(){

    }

    get(){

    }

    filter () {

    }

    classification(){

    }
}

export default Product
