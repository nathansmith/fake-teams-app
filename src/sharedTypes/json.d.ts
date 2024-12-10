export type IJson = IJsonArray | IJsonObject | boolean | number | null | string;

export type IJsonArray = IJson[];

/*
=====
NOTE:
=====

  This is an `interface` because the reference
  can be circular. It would change to `any` if
  we simply used a `type`. This does not work…

  ```
  export type IJsonObject = Record<string, IJson>;
  ```
*/

export interface IJsonObject {
  [key: string]: IJson;
}
