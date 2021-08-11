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
