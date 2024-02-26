import { appConfig } from "./appConfig";
import { encode } from 'js-base64';
import BaseFetcher from "./baseFetcher";

export default class ProductTrackingFetcher extends BaseFetcher {
    async track(trackData) {
        try {
            if (trackData.cart) {
                trackData.cart.map(item => ({
                    ...item,
                    timestamp: undefined
                }))
            }
            console.log('tracking data: ', trackData);
            return await super.execute(`${appConfig.baseURL}/stream`, 'POST', {
                StreamName: appConfig.productTrackStreamName,
                Data: encode(JSON.stringify(trackData)),
                PartitionKey: trackData.appId,
                appId: trackData.appId,
                installationKey: trackData.installationKey
            });
        } catch (e) {
            console.log('Tracking data was run failed', e);
        }
    }
}