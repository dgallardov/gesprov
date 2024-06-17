import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Proveedores extends Document {
    @Prop({required:true})
    nombre:string;
    @Prop({required:true})
    tipo:string;
    @Prop({required:true})
    idProducto:String;
}

export const ProveedoresSchema = SchemaFactory.createForClass(Proveedores);