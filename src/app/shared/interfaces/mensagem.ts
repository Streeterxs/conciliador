import { Usuario } from './usuario';

export class Mensagem{
    private _id: number;
    private _usuario: Usuario;
    private _data: Date;
    private _mensagens: string;
    constructor(usuario: Usuario, data: Date, mensagens: string, id?: number){
        this._id = id;
        this._usuario = usuario;
        this._data = data;
        this._mensagens = mensagens
    }

    get id(): number{
        return this._id;
    }
    get usuario(): Usuario{
        return this._usuario;
    }
    get data(): Date{
        return this._data;
    }
    get mensagens(): string{
        return this._mensagens;
    }
}