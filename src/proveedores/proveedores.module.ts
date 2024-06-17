import { Module } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresController } from './proveedores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proveedores, ProveedoresSchema } from './schemas/proveedores.shema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Proveedores.name, schema: ProveedoresSchema}])
  ],
  controllers: [ProveedoresController],
  providers: [ProveedoresService],
})
export class ProveedoresModule {}
