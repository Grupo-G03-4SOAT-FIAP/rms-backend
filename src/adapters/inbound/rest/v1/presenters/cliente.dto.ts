import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CriaClienteDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome do Cliente não pode ser vazio' })
  nome: string;

  @IsString()
  @IsNotEmpty({
    message: 'Email não pode ser vazio',
  })
  email: string;
  @IsString()
  @IsNotEmpty({
    message: 'CPF não pode ser vazio',
  })
  cpf: string;
}

export class AtualizaClienteDTO {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  cpf?: string;
}

export class ClienteDTO {
  id: string;
  nome: string;
  email: string;
  cpf: string;
}