import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Chave } from './model/chave.model';

@Injectable()
export class ChaveService {
    constructor(@InjectModel('Chave') private readonly chaveModel: Model<Chave>) { }

    async listarChaves(): Promise<Chave[]> {
        return await this.chaveModel.find({ status: true }).exec();
    }


    async criarChave(nome: string): Promise<Chave> {
        try {
            const chave = new this.chaveModel({ nome, situacao: "DISPONIVEL", status: true });
            return await chave.save();
        } catch (Error) {
            console.log(Error.message)
            throw new NotFoundException(
                Error.message
            );
        }
    }


    async buscarChavePorNome(nome: string): Promise<Chave> {
        const chave = await this.chaveModel.findOne({ nome });
        if (!chave) {
           throw new NotFoundException('Chave não encontrada');
        }
        return chave;
    }


    async alterarChave(nome: string, novosDados: Partial<Chave>): Promise<Chave>{
        const chave = await this.chaveModel.findOne({nome});

        if(!chave){
           throw new NotFoundException('Chave não encontrada');
        }

        Object.assign(chave, novosDados);

        return await chave.save();
    }
     
    async desativarChave (nome : string): Promise<Chave> {
        const chave = await this.chaveModel.findOne({ nome });
        if (!chave) {
            throw new NotFoundException('Chave não encontrada');
        }
        chave.status = false;

        return await chave.save();
    }
    
}
