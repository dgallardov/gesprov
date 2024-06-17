import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Productos extends Document {
    @Prop({required:true})
    nombre:string;
    @Prop({required:true})
    tipo:string;
    @Prop({required:true})
    idProveedor:string;
}

export const ProductosSchema = SchemaFactory.createForClass(Productos);