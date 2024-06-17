import { PartialType } from '@nestjs/swagger';
import { CreateProveedoreDto } from './create-proveedores.dto';

export class UpdateProveedoreDto extends PartialType(CreateProveedoreDto) {}
