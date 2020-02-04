import { User } from '../../core/user/user';

export interface Mensagem {
     criador: User;
     data: Date;
     id: number;
     mensagem: string;
}
