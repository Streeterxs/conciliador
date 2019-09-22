import { Usuario } from './usuario';
import { Mensagem } from './mensagem';

export class Sala{
    private _id: number;
    private _descricao: string;
    private _usuarios: Usuario[];
    private _data: Date;
    private _mensagens: Mensagem[];
    constructor(descricao: string, usuarios: Usuario[], data: Date, mensagens: Mensagem[], id?: number){
        this._id = id;
        this._descricao = descricao;
        this._usuarios = usuarios;
        this._data = data;
        this._mensagens = mensagens
    }

    get id(): number{
        return this._id;
    }
    get descricao(): string{
        return this._descricao;
    }
    get usuarios(): Usuario[]{
        return this._usuarios;
    }
    get data(): Date{
        return this._data;
    }
    get mensagens(): Mensagem[]{
        return this._mensagens;
    }
}