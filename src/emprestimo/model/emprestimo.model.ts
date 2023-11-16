import * as mongoose from 'mongoose';
import { Chave } from 'src/chave/model/chave.model';
import { Servidor } from 'src/servidor/model/servidor.model';


export const EmprestimoSchema = new mongoose.Schema({
datahoraEmprestimo: Date,
datahoraDevolucao: Date,
status: Boolean,
chave: { type: mongoose.Schema.Types.ObjectId, ref: 'Chave' },
servidorRetirou: { type: mongoose.Schema.Types.ObjectId, ref: 'Servidor' },
servidorDevolvel: { type: mongoose.Schema.Types.ObjectId, ref: 'Servidor' },
});


export interface Emprestimo extends mongoose.Document {
datahoraEmprestimo: Date;
datahoraDevolucao: Date;
chave: Chave;
servidorRetirou: Servidor;
servidorDevolvel: Servidor;
status: Boolean;
}
