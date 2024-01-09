import { File } from "../File/File";

export interface Folder {
  name: string;
  files: File[];
  subFolders: Folder[];
}
