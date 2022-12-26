export type Query = Record<string, any>;
export type ID = string | undefined;

export interface DatabaseRepository<T> {
  create(data: Partial<T>, query?: Query): Promise<T>;

  findAll?(query?: Query): Promise<T[]>;

  findById?(id: ID, query?: Query): Promise<T>;

  deleteById?(id: ID, query?: Query): Promise<T>;

  updateById?(id: ID, data: T, query?: Query): Promise<T>;

  findOne?(query?: Query): Promise<T>;
}
