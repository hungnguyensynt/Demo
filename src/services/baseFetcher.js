

export default class BaseFetcher {
  defaultHeader = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Origin': '*'
  }

  execute(url, method, parameters, headers,token) {
    const {appId, installationKey, ...others} = parameters;

    return fetch(url, {
      method,
      body: JSON.stringify(others),
      headers: {
        ...this.defaultHeader,
        ...(headers || {}),
        'app-id': appId ,
        'api-key': installationKey,
        ...((token ? {'x-api-key': token} : {}))
      },
    })
      .then((res) => res.json())
  }
}