import {appConfig} from './appConfig';
import BaseFetcher from './baseFetcher';

export default class ManagementFetcher extends BaseFetcher {
    async getAppConfig(){
        const parameters = {
            query: `query GetAppConfiguration ($item: GetAppConfigurationInput!) {
        GetAppConfiguration(item: $item) {
          subscription_url
          event_tracking_url
          token
          publicKey
          add_to_cart_button_labels
          coupon_input_ids
        }
      }`,
            variables: {
                'item': {
                    'api_key': appConfig.apiKey,
                    'app_id': appConfig.appId,
                }
            },
        };
        const result = await super.execute(`${appConfig.managementApiUrl}/graphql`, 'POST', parameters);
        return result.data?.GetAppConfiguration;
    }
}
