class SyntAppConfiguration {
    baseURL = 'https://vqihir3lr1.execute-api.us-east-2.amazonaws.com/develop';
    managementApiUrl = 'https://dev-management-function-api.synt.com';
    productTrackStreamName = 'Kinesis_TimeSeriesProductTrackingService-develop';
    syntAdminUI = 'https://dev-cdn.synt.com';

    initConfig(){
        // @ts-ignore
        this.baseURL = process.env.BASE_URL || 'https://vqihir3lr1.execute-api.us-east-2.amazonaws.com/develop';
        this.managementApiUrl = process.env.MAPI_URL || 'https://dev-management-function-api.synt.com';
        this.productTrackStreamName = process.env.STREAM_NAME || 'Kinesis_TimeSeriesProductTrackingService-develop';
        this.syntAdminUI = process.env.SYNT_WEB_ADMIN_UI || 'https://dev-cdn.synt.com';
    }
}

// @ts-ignore
export const appConfig = new SyntAppConfiguration();
