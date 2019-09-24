import { Usuario } from './usuario';
import { Mensagem } from './mensagem';

export interface Sala{
    id?: number;
    descricao?: string;
    usuarios?: Usuario[];
    data?: Date;
    mensagens?: Mensagem[];
}