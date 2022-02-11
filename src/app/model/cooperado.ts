import { Conta } from "./conta";

export interface Cooperado {
    id: number;
    nome: string;
    cpf: string;
    situacao_cpf: string;
    conta: Conta[];
}
