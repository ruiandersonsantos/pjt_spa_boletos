// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  urlBase: 'http://www.apiboleto.dtconsultoria.com.br/api',
  urlLogin: 'http://www.apiboleto.dtconsultoria.com.br/oauth/token',
  urlLogout: 'http://www.apiboleto.dtconsultoria.com.br/oauth/revoke_token',
  client_Secret: 'q58YB7pBYRiRsO4q4nGJXAFXCCaTkHf4t4K9fdPK',
  client_id: 2,
  grant_type: 'password'

};
