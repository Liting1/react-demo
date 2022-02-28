
// 页面分享信息
interface ShareConfig {
    title: string; // 分享标题
    desc: string; // 分享描述
    img: string; // 分享图片
}

interface BaseConfig {
    type: string;
    name: string;
    isShare: boolean; // 是否开启页面分享
    share: ShareConfig;
    isCreateAD: boolean; // 是否同步为页面创建展示广告
    createADTime?: string; // 创建广告展示时间
    isShowEBM: boolean; // 是否在商户版展示
    isRecommended: boolean; // 是否展示推荐商品
    memberShowList: string[]; // 可见会员等级列表, 不选择表示都可见
    noMemberToUrl: string; // 非可见会员跳转地址
}



const baseConfig:BaseConfig = {
    type: 'header',
    name: '基本信息',
    isShare: true,
    share: {
        title: '',
        desc: '',
        img: ''
    },
    isCreateAD: true,
    isShowEBM: true,
    isRecommended: true,
    memberShowList: [],
    noMemberToUrl: '',
}

export default baseConfig;

export type {BaseConfig}
