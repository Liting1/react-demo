
/**
 * 预售券商品信息处理类
 */
class Product {
    private static instance: Product;
    private readonly data: any;
    // @ts-ignore
    private product: Map<any, any>;
    constructor(data: any) {
        if(Product.instance) return Product.instance;
        Product.instance = this;
        this.data = data || [];
        this.init();
    }

    private init() {
        this.product = new Map();
        this.data.forEach((item: any) => {
            // @ts-ignore
            this[item.productType] ? this[item.productType].set(item.productId, item) : this[item.productType] = new Map();
            this.product.set(item.productId + item.productType, item);
        });
    }

    add(product: any){
        return this.product.set(product.productId+product.productType, product);
    }

    delete(key: any){
        return this.product.delete(key);
    }

    has(key:any){
        return this.product.has(key);
    }

    clear(){
        this.product.clear();
    }

    get(key: any){
        return this.product.get(key);
    }

    filter (key:string, val:any) {
        const mapData = new Map();
        this.product.forEach((item, key) => {
            if(item[key] === val) mapData.set(key, item)
        });
        return mapData;
    }

}

export default Product
