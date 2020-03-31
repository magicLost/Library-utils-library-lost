/* interface IFileSystemHelper {
  isPathExists: (path: string) => boolean;

  deleteDir: (path: string, isAsync?: boolean) => Promise<any>;
  copyDir: (
    pathToCopy: string,
    pathDestination: string,
    isAsync?: boolean
  ) => Promise<any>;
  makeDir: (path: string, isAsync?: boolean) => Promise<any>;

  writeFile: (
    path: string,
    data: string,
    isAsync?: boolean,
    utf?: string
  ) => Promise<any>;
  readFile: (path: string, isAsync?: boolean, utf?: string) => Promise<any>;
  copyFile: (
    sourcePath: string,
    destinationPath: string,
    isAsync: boolean
  ) => Promise<any>;
  deleteFile: (path: string, isAsync: boolean) => Promise<any>;
} */

declare class FileSystemHelper {
  isPathExists: (path: string) => boolean;

  deleteDir: (path: string, isAsync?: boolean) => Promise<any>;
  copyDir: (
    pathToCopy: string,
    pathDestination: string,
    isAsync?: boolean
  ) => Promise<any>;
  makeDir: (path: string, isAsync?: boolean) => Promise<any>;

  writeFile: (
    path: string,
    data: string,
    isAsync?: boolean,
    utf?: string
  ) => Promise<any>;
  readFile: (path: string, isAsync?: boolean, utf?: string) => Promise<any>;
  copyFile: (
    sourcePath: string,
    destinationPath: string,
    isAsync?: boolean
  ) => Promise<any>;
  deleteFile: (path: string, isAsync?: boolean) => Promise<any>;
}

export default FileSystemHelper;
