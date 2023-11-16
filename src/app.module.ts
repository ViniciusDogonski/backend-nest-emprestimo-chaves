import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChaveModule } from './chave/chave.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { ServidorModule } from './servidor/servidor.module';
import { ChaveController } from './chave/chave.controller';
import { ChaveService } from './chave/chave.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaveSchema } from './chave/model/chave.model';
import { EmprestimoSchema } from './emprestimo/model/emprestimo.model';
import { ServidorSchema } from './servidor/model/servidor.model';

@Module({
  imports: [
    //ChaveModule, ServidorModule, EmprestimoModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature([{name: 'Chave', schema : ChaveSchema}]),
    MongooseModule.forFeature([{ name: 'Emprestimo', schema: EmprestimoSchema }]),
    MongooseModule.forFeature([{ name: 'Servidor', schema: ServidorSchema }]),
  ],
  controllers: [AppController, ChaveController],
  providers: [AppService, ChaveService],
})
export class AppModule {}
