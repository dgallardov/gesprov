import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Productos } from './schemas/productos.shema';


@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Productos.name)
    private readonly ProductosModel: Model<Productos>,
  ) {}

  create(CreateProductoDto: CreateProductoDto) {
    const createdProductos = new this.ProductosModel({
      nombre: CreateProductoDto.nombre,
      tipo: CreateProductoDto.tipo,
      idProveedor: CreateProductoDto.idProveedor,
    });

    return createdProductos.save();
  }


  findAll() {
    return this.ProductosModel.find().exec();
  }

  async findOne(id: string) {
    const proveedor = await this.ProductosModel.findById(id).exec();
    return proveedor ? proveedor.toObject():null;
  }

  async update(id: string, UpdateProductoDto: UpdateProductoDto): Promise<Productos> {

    const updatedProveedor  = await this.ProductosModel.findByIdAndUpdate(id, UpdateProductoDto, {
     new:true,
     runValidators:true ,
    }).exec();

    if (!updatedProveedor) {
      throw new NotFoundException(`Proveedor con id ${id} no encontrado`);
    }

    return updatedProveedor;
  }

  async remove(id: string): Promise<void> {
    await this.ProductosModel.findByIdAndDelete(id).exec();
  }
}
