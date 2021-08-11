import api from './index';

/**
 * 获取自定义页面配置接口
 * @param customizeSnapshotId 自定义页面id
 */
export const getCustomizeSnapshot = async (customizeSnapshotId:number) => {
    const data = await api.get('/board-api/eb_customize_snapshot/get_customize_snapshot', {
        params: {
            customizeSnapshotId
        }
    });
    const res = data.data;
    if(data.status === 200 && res) {
        if(res.code === '0') {
            return res.data;
        } else {
            console.log('get_customize_snapshot:', res.message);
        }
    } else {
        console.log(data.statusText);
    }
}
