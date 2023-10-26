import { PedidoDTO } from 'src/adapters/inbound/rest/v1/presenters/pedido.dto';
import { ClienteEntity } from 'src/domain/entities/cliente.entity';
import { PedidoEntity } from 'src/domain/entities/pedido.entity';
import { ProdutoEntity } from 'src/domain/entities/produto.entity';

export interface IPedidoFactory {
  criarItemPedido(item: object[]): Promise<ProdutoEntity[]>;
  criarEntidadeCliente(cpfCliente: string): Promise<ClienteEntity | null>;
  criarEntidadePedido(pedido: PedidoDTO): Promise<PedidoEntity>;
}

export const IPedidoFactory = Symbol('IPedidoFactory');