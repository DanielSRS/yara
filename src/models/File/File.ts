export interface File {
  name: string;
  extension: string | undefined;
  /** Tamanho em bytes */
  size: number;
  /** Caminho absoluto */
  path: string;
}