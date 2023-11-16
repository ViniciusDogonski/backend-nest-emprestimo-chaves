import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';
import { ChaveService } from './chave.service';
import { Chave } from './model/chave.model';

@Controller('chave')
export class ChaveController {
    constructor(private readonly chaveService: ChaveService) {}

    @Get()
    async listarChaves(): Promise<Chave[]> {
      return this.chaveService.listarChaves();
    }

    @Post()
    async criarChave(@Body() data: Chave): Promise<Chave> {
      console.log(data)
      return this.chaveService.criarChave(data.nome);
    }

    @Get(':nome')
    async buscarChavePorNome(@Param('nome') nome: string){
      try{
        const chave = await this.chaveService.buscarChavePorNome(nome);
        return {chave};
      }catch (error){
        return {error: error.message};
      }

    }

    @Put(':nome')
    async alterarChave(
      @Param('nome') nome : string,
      @Body() novosDados : Partial<Chave>
    ){
     try{
      const chaveAlterada = await this.chaveService.alterarChave(
        nome,
        novosDados,
      );
      return { chave: chaveAlterada, message: 'Chave alterada com sucesso' };
     }catch (error){
      return { error: error.message };
     }
    }

    @Patch('desativar/:nome')
    async desativarChave(@Param('nome') nome: string) {
      try {
        const chaveDesativada = await this.chaveService.desativarChave(nome);
        return { chave: chaveDesativada, message: 'Chave desativada com sucesso' };
      } catch (error) {
        return { error: error.message };
      }
    }
}
