/**
 * 深度合并对象
 * @param target
 * @param obj
 */
export function deepMerge(target:object, obj:object){
    let key: keyof typeof obj;
    // @ts-ignore
    for(key in obj) {
        const objVal = obj[key];
        const targetVal = target[key];
        if(typeof objVal === 'object' && objVal !== null) {
            deepMerge(targetVal, objVal);
        } else {
            target[key] = objVal;
        }
    }
    return target;
}


/**
 * 解析本地token
 * @param token
 */
export function decodeAuthString (token: string) {
    if (!token) return false
    try {
        let str = atob(token);
        let decoded = JSON.parse(str);
        return JSON.parse(decoded.params);
    } catch (e) {
        console.log('decodeAuthString:', e);
        return false;
    }
}

/**
 * 将指定的url中的参数转换为对象形式
 * @param url
 */
export function urlFormat(url:string){
    if(!url) return {};
    const entries = url?.split('?')[1]?.split('&')?.map(item => item.split('='));
    return entries ? Object.fromEntries(entries): {};
}


/**
 * 获取当前url中的参数
 * @param key
 */
export function getQuery(key?:string){
    const params = urlFormat(window.location.search);
    if(key) return params[key] || '';
    return params;
}

/**
 * 快速设置静态资源地址
 * @param url
 */
export function u(url:string):string {
    return `static/img/${url}`;
}

/**
 * 数据比较
 * @param prevProps
 * @param nextProps
 */
export function propsAreEqual(prevProps:Record<string, any>, nextProps:Record<string, any>){
    return !Object.keys(nextProps).some((item:string) => {
        const p = nextProps[item], q = prevProps[item];
        if(typeof p === 'object') {
            return JSON.stringify(p) !== JSON.stringify(q);
        } else {
            return p !== q;
        }
    });
}

/**
 * 设置根字体大小
 * @param width
 */
export function setRem(width = 750){
    try {
        const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const html = document.getElementsByTagName('html')[0];
        html.style.fontSize = clientWidth / width * 100 + 'px';
    } catch (e) {
        console.log('setRem',e);
    }
}
