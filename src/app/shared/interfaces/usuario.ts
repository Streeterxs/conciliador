export class Usuario{
    private _name: string;
    private _cpf: string;
    private _email: string;
    private _is_admin: boolean;
    private _is_moderador: boolean;
    constructor(name: string, cpf: string, email: string, is_admin: boolean, is_moderador: boolean){
        this._name = name;
        this._cpf = cpf;
        this._email = email;
        this._is_admin = is_admin;
        this._is_moderador = is_moderador;
    }

    get name(): string{
        return this._name;
    }
    get cpf(): string{
        return this._cpf;
    }
    get email(): string{
        return this._email;
    }
    get is_admin(): boolean{
        return this._is_admin;
    }
    get is_moderador(): boolean{
        return this._is_moderador;
    }
}