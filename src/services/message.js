export const MSG_PATTERN = {
    BROADCAST_MSG: 0,
    INDIVIDUAL_MSG: 1
}
export const BROADCAST_MSG = 0;
export const INDIVIDUAL_MSG_WC = 1;
export const INDIVIDUAL_MSG_AC = 2;
export const INDIVIDUAL_MSG_BA = 3;
export const INDIVIDUAL_MSG_REC = 4;


export const INDIVIDUAL_MSG = {
    'wcm': INDIVIDUAL_MSG_WC, //welcomeMessaging
    'acm': INDIVIDUAL_MSG_AC, //abandonedCartMessaging
    'bam': INDIVIDUAL_MSG_BA, //browseAbandonmentMessaging
    'prm': INDIVIDUAL_MSG_REC, //recommendation
}

export const INDIVIDUAL_MSG_VALUES = {
    [INDIVIDUAL_MSG_WC]: 'wcm',
    [INDIVIDUAL_MSG_AC]: 'acm',
    [INDIVIDUAL_MSG_BA]: 'bam',
    [INDIVIDUAL_MSG_REC]: 'prm'
}

export const ONE_DAY_TIMESTAMP = 24 * 60 * 60 * 1000;

export const FORCE_SUBSCRIBE_DAYS = 7;

export const SYNT_LOGO_URL = 'https://synt.com/wp-content/uploads/2019/11/logo_small.png'
export const getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return undefined;
}

export const getMessageId = () => {
    return getQueryVariable('id') || localStorage.getItem('lastBroadcastMessageId')
}

export const getSegmentIdFromURL = () => {
    return getQueryVariable('segmentId');
}

export const getSegmentId = (msgIDPayload) => {
    const value = localStorage.getItem('segmentId') || '';
    if (value.indexOf(msgIDPayload) > -1) {
        return value.split('_seg_')[1];
    }
    return '';
}

export const getMessageIdPayload = (messageId) => {
    if (messageId.startsWith(`${BROADCAST_MSG}`)) {
        return `ID::${messageId.substring(1)}`
    } else {
        const messageType = messageId.substring(0, 1)
        return `INDIVIDUAL_TARGETED_MSG::${INDIVIDUAL_MSG_VALUES[messageType]}::ID::${messageId.substring(1)}`
    }
}
