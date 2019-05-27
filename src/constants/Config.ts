export class Config{
    public static SERVER_DOMAIN: string = '127.0.0.1:3000'
    public static API_URL: string = `http://${Config.SERVER_DOMAIN}/api`;
    public static KEY_ACCESS_TOKEN: string = 'access_token';
}