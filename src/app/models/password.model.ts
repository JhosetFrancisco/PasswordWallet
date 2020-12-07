
export class Password {

    public provider: string;
    public usuario: string;
    public encryptPassword: string;

    constructor( provider: string, usuario: string, encryptPassword: string ) {

        this.provider = provider;
        this.usuario = usuario;
        this.encryptPassword = encryptPassword;
    }
}