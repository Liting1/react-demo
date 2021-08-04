/**
 * 深度合并对象
 * @param target
 * @param obj
 */
function deepMerge(target:object, obj:object){
    let key: keyof typeof obj;
    // @ts-ignore
    for(key in obj) {
        const objVal = obj[key];
        const targetVal = target[key];
        if(typeof objVal === 'object' && objVal !== null) {
            deepMerge(targetVal, objVal)
        } else {
            target[key] = objVal
        }
    }
    return target;
}

export {
    deepMerge
}
