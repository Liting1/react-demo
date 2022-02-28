# zkt-custom-page
自定义EB端配置分包

## 项目运行
1. git clone  克隆下载项目到本地

2. npm install 下载项目依赖

3. npm run start 运行开发环境

4. npm run build 打包生成生产环境


## 开发规范
+ 请按照项目目录结构进行添加文件及文件夹
+ 具体规范请参考地址 https://git.zhiketong.net/Web/eslint-config-zkt

### 约定
+ 组件类型是用大写字母开头
    + 例如： Title, TabBar
    + View层组件命名为 TitleView TabBarView
    + Controller层类名为 TitleController TabBarController
    + Server层类名为 TitleServer TabBarServer


## 项目目录结构

```
App
|—— public                                  静态资源文件夹
|   |—— index.html                          承载页面 
|   |—— manifest.json
|
|-- src                                     代码资源目录
|   |—— api                                 接口请求方法目录
|   |—— components                          组件目录
|   |   |—— baseComponents                  基础组件目录
|   |   |—— customComponents                自定义Preview展示组件目录
|   |   |—— customComponentsSetting         自定义Setting展示组件目录
|   |   |—— Drag                            拖拽组件目录
|   |   |—— HOC                             高阶组件目录
|   |   |—— Preview                         Preview 组件目录
|   |   |—— Setting                         Setting 组件目录
|   |   |—— SideActionBar                   SideActionBar 组件目录
|   |
|   |—— config                              项目配置目录
|   |   |—— componentConfig                 组件数据配置
|   |   |—— environmentConfig               应用环境配置
|   |   |—— index.ts
|   |   
|   |—— css                                 css文件目录
|   |   |—— reset.sass                      初始化样式文件
|   |   |—— theme.sass                      主题样式文件
|   |
|   |—— main                                项目入口主流程逻辑处理目录
|   |   |—— FieldsVerify                    组件字段验证
|   |   |—— componentDataInit               组件初始化处理
|   |   |—— compatibility                   组件兼容性处理
|   |   |—— index.ts
|   |—— store                               项目数据存储仓库目录
|   |   |—— actions                         修改store存储数据方法目录
|   |   |—— data                            store 初始数据存储目录
|   |   |—— getters                         获取store 值的方法目录
|   |   |—— index.tsx                       store 主文件
|   |
|   |—— type                                ts接口类型等定义目录
|   |—— utils                               工具类目录
|   |   |—— BundledActivity                 活动类商品处理类
|   |   |—— const                           常量目录
|   |   |—— Pass                            门票类商品处理类
|   |   |—— PrepayCard                      储值卡商品处理类
|   |   |—— Product                         预售券商品处理类
|   |   |—— index.ts                        常用工具函数文件
|   |   |—— common.ts                       通用工具函数文件
|   |—— test                                开发测试目录
|   |—— App.tsx
|   |—— App.sass
|   |—— index.tsx                           项目入口文件
|   |—— setupProxy.js                       开发环境配置代理文件
|
|—— .gitignore
|—— package.json
|—— tsconfig.json                           ts配置文件

```


### 功能点

+ 样式布局
