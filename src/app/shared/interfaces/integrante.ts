import { User } from '../../core/user/user';

export interface Integrante {
     id: number;
     confirmado?: boolean;
     user?: User;
}
