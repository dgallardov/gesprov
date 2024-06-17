import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedores.dto';
import { UpdateProveedoreDto } from './dto/update-proveedores.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Proveedores } from './schemas/proveedores.shema';


@Injectable()
export class ProveedoresService {
  constructor(
    @InjectModel(Proveedores.name)
    private readonly ProveedoresModel: Model<Proveedores>,
  ) {}

  create(CreateProveedoreDto: CreateProveedoreDto) {
    const createdProovedores = new this.ProveedoresModel({
      nombre: CreateProveedoreDto.nombre,
      tipo: CreateProveedoreDto.tipo,
      idProducto: CreateProveedoreDto.idProducto,
    });

    return createdProovedores.save();
  }


  findAll() {
    return this.ProveedoresModel.find().exec();
  }

  async findOne(id: string) {
    const proveedor = await this.ProveedoresModel.findById(id).exec();
    return proveedor ? proveedor.toObject():null;
  }

  async update(id: string, updateProveedoreDto: UpdateProveedoreDto): Promise<Proveedores> {

    const updatedProveedor  = await this.ProveedoresModel.findByIdAndUpdate(id, updateProveedoreDto, {
     new:true,
     runValidators:true ,
    }).exec();

    if (!updatedProveedor) {
      throw new NotFoundException(`Proveedor con id ${id} no encontrado`);
    }

    return updatedProveedor;
  }

  async remove(id: string): Promise<void> {
    await this.ProveedoresModel.findByIdAndDelete(id).exec();
  }
}
