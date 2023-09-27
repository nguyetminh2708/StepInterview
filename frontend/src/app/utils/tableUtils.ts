import { Entity } from '../types/entity';

export const insertItem = <T extends Entity>(record: Partial<T>, data: T[]) => {
  const newData = [...data];
  newData.push(record as T);

  return newData;
};
