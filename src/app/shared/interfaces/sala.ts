import { Mensagem } from './mensagem';
import { Integrante } from './integrante';

export interface Sala {
    data: Date,
    descricao: string;
    id: number;
    integrantes: Integrante[];
    is_active: boolean;
    mensagens: Mensagem[];
}
