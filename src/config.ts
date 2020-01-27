const allConfigs: any = {
    DEV: {
        cognito: {
            userPoolId: process.env.REACT_APP_USER_POOL_ID_DEV,
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_DEV,
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_DEV
        },
        api: {
            endpoint: process.env.REACT_APP_API_GATEWAY_URL_DEV,
        }
    },
    PROD: {
        cognito: {
            userPoolId: process.env.REACT_APP_USER_POOL_ID_PROD,
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_PROD,
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_PROD
        },
        api: {
            endpoint: process.env.REACT_APP_API_GATEWAY_URL_PROD,
        }
    }
}
const stage = process.env.REACT_APP_STAGE ? (process.env.REACT_APP_STAGE === 'TEST' ? 'DEV' : process.env.REACT_APP_STAGE) : 'DEV';


export default allConfigs[stage];

