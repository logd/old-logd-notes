const allConfigs: any = {
  DEV: {
    cognito: {
      userPoolId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_ID,
      identityPoolId: process.env.REACT_APP_LOGD_DEV_IDENTITY_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_LOGD_DEV_AUTH_POOL_CLIENT_ID,
    },
    // api: {
    //   endpoint: process.env.REACT_APP_API_GATEWAY_URL_DEV,
    // },
  },
  // STAGING: {
  //   cognito: {
  //     userPoolId: process.env.REACT_APP_USER_POOL_ID_PROD,
  //     identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_PROD,
  //     userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_PROD,
  //   },
  //   api: {
  //     endpoint: process.env.REACT_APP_API_GATEWAY_URL_PROD,
  //   },
  // },
  // PROD: {
  //   cognito: {
  //     userPoolId: process.env.REACT_APP_USER_POOL_ID_PROD,
  //     identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID_PROD,
  //     userPoolWebClientId: process.env.REACT_APP_USER_POOL_APP_CLIENT_ID_PROD,
  //   },
  //   api: {
  //     endpoint: process.env.REACT_APP_API_GATEWAY_URL_PROD,
  //   },
  // },
};
const stage = process.env.REACT_APP_STAGE ? process.env.REACT_APP_STAGE : "DEV";

export const amplifyConfig = allConfigs[stage];
