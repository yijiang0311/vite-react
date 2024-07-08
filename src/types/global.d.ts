
/**
 * 优化TS内置的Omit类型, 选择key的时候可以进行提示
 *
 * 从T中删除某几个Key，重新生成新的类型
 *
 * @example MyOmit<T, 'k1' | 'k2'>
 *
 */
type MyOmit<T, K extends keyof T> = Omit<T, K>;

/**
 * 提取Promise类型中的Value值的类型
 */
type PromiseValue<T> = T extends PromiseLike<infer U> ? U : T;

/**
 * 用于完整展开类型，浮动的时候显示所有类型细节，方便查看
 * https://zhuanlan.zhihu.com/p/339577453
 */
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

/**
 * 用于完整展开类型，浮动的时候显示所有类型细节，方便查看
 * https://zhuanlan.zhihu.com/p/339577453
 */
type ExpandRecursively<T> = T extends object
  ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
  : T;

/** 高阶函数类型 */
interface IHoF{
  <T extends (...args:any) => any>(fn:T):(...args:Parameters<T>)=>ReturnType<T>
}

/** 获取数组类型的元素类型 T 代表数字类型*/
type ArrayItem<T> = T extends Array<infer R> ? R : never

// 或者
// const array = ['a', '1', true];
// type ItemType = (typeof array)[number];       // string | number | boolean
// type ItemTypeString = (typeof array)[0];        // string

