export function deepFreeze<T> (obj: T): T {
    try{
        const propNames = Object.getOwnPropertyNames(obj);
        for (const name of propNames) {
            const value = obj[name as keyof T];
            if (value && typeof value === 'object') {
                Object(value);
            }
        }
        return Object.freeze(obj);
    }catch (e){
        return obj;
    }


}
