/**
 * 开发与生产环境的基础配置文件
 */
const options:any = {
    development: { // 开发配置
        merchantId: 5
    },
    production: { // 生产配置

    }
}

export default options[process.env.NODE_ENV];
