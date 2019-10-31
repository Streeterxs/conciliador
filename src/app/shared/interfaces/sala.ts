import { Mensagem } from './mensagem';
import { User } from '../../core/user/user';

export interface Sala {
    id?: number;
    descricao?: string;
    integrantes?: User[];
    data?: Date;
    messages?: Mensagem[];
}
