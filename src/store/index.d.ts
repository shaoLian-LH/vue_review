// 用户类型
export type UserIdentity = 'admin' | 'kaopuyun' | 'unkown';
// 全局属性
export interface StoreProps {
    // 身份
    identity: UserIdentity;
    // 数据
    data: any[];
}
