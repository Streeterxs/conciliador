export interface TokenDecoded {
    sub: string;
    nome: string;
    role: string[];
    id: number;
    email: string;
    ativo: boolean;
    alou: string;
    iat: number;
    exp: number;
}
