/*
* 基础工具函数文件
*/

/**
 * 判断一个变量的类型是否是对象
 * @param o 对象
 */
export function isObject(o: any): boolean {
    return Object.prototype.toString.call(o) === "[object Object]";
}

/**
 * json对象深拷贝
 * @param o
 */
export function deepCopy<T>(o:T): T{
    return JSON.parse(JSON.stringify(o));
}

/**
 * 字符串首字母大写转换
 * @param str
 */
export function Uppercase(str:string){
    return str.replace(/^[a-z]/, s => s.toUpperCase());
}
