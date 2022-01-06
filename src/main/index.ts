import Product from "../utils/Product";
import Pass from "../utils/Pass";
import PrepayCard from "../utils/PrepayCard";
import BundledActivity from "../utils/BundledActivity";
import RedPacket from "../utils/RedPacket";
import Compatibility from "./Compatibility";

/**
 * 自定义页面数据处理入口
 */
class Main {
    private readonly data: any;
    private options: any;
    private product: Product | undefined;
    private pass: Pass | undefined;
    private prepayCard: PrepayCard | undefined;
    private bundledActivity: BundledActivity | undefined;
    private redPacket: RedPacket | undefined;
    private env: string;

    constructor(data:any) {
        this.data = data;
        this.env = process.env.NODE_ENV
    }

    init(options:any){
        this.options = options;
        this.goodsHandle();
        // 组件数据处理
        const modules = new Compatibility(this.dataParse(this.data.customizeSnapshotJson))
        modules.init();
    }

    /**
     * 处理组件数据解析
     * @param customizeSnapshotJson
     */
    dataParse(customizeSnapshotJson:string){
        let modules = [];
        try {
            modules = JSON.parse(customizeSnapshotJson);
        } catch (e) {
            console.log('moduleHandle', e);
        }
        return modules;
    }

    /**
     * 处理分享数据
     * @param data
     */
    shareHandle(data:any){

    }

    /**
     * 商品数据处理
     */
    goodsHandle(){
        // 预售券
        this.product = new Product(this.data.saveCustomizeSnapshotProductVmos);
        // 门票
        this.pass = new Pass(this.data.saveCustomizeSnapshotPassVmos);
        // 储值卡
        this.prepayCard = new PrepayCard(this.data.saveCustomizeSnapshotPrepayCardVmos);
        // 捆绑活动商品
        this.bundledActivity = new BundledActivity(this.data.saveCustomizeSnapshotBundledActivityVmos);
        // 红包
        this.redPacket = new RedPacket(this.data.customizeCouponActVmos);
        // ......
    }

    /**
     * 主题颜色设置
     */
    themeColor(){

    }

}

export default Main;
