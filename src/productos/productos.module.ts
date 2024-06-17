import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Productos, ProductosSchema } from './schemas/productos.shema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Productos.name, schema: ProductosSchema}])
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
