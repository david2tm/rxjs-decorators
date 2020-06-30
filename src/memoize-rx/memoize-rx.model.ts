import {Observable} from 'rxjs';
import {ObservableMethod} from '../common/model/common.model';

export type KeyResolver = (...args: any[]) => string;

export type RxMemoizable<T, D> = (
    target: T,
    propertyName: keyof T,
    descriptor: TypedPropertyDescriptor<ObservableMethod<D>>
) => TypedPropertyDescriptor<ObservableMethod<D>>;

export interface RxCache<D> {
  set: (key: string, value: Observable<D>) => RxCache<D>;
  get: (key: string) => Observable<D> | undefined;
  delete: (key: string) => boolean;
  has: (key: string) => boolean;
}

export interface RxMemoizeConfig<T, D> {
  cache?: RxCache<D>;
  keyResolver?: KeyResolver | keyof T;
  expirationTimeMs?: number;
}
