const rimraf = require("rimraf");
import { ncp } from "ncp";
import { mkdir, existsSync, readFile, writeFile, unlink, copyFile } from "fs";
import { promisify } from "util";

class FileSystemHelper {
  //fs.readdir

  isPathExists = (path: string): boolean => {
    return existsSync(path);
  };

  copyFile = (
    sourcePath: string,
    destinationPath: string,
    isAsync: boolean = false
  ) => {
    return promisify(copyFile)(
      sourcePath,
      destinationPath
    ).catch((error: Error) => this.catchError(error, isAsync));
  };

  makeDir = (path: string, isAsync: boolean = false) => {
    return promisify(mkdir)(path).catch((error: Error) =>
      this.catchError(error, isAsync)
    );
  };

  deleteDir = (path: string, isAsync: boolean = false) => {
    return promisify(rimraf)(path).catch((error: Error) =>
      this.catchError(error, isAsync)
    );

    /* return new Promise((resolve, reject) => {
      rimraf(path, null, (error: Error) => {
        if (error) reject(error);
        resolve();
      });
    }); */

    //return await this.rimrafPromisify(path);
    /* rimraf(path, err => {
            if (err) {
            return console.error(err);
            }
            console.log(`${path} - successfully deleted.`);
        }); */
  };

  copyDir = (
    pathToCopy: string,
    pathDestination: string,
    isAsync: boolean = false
  ) => {
    //ncp.limit = 16;
    return promisify(ncp)(pathToCopy, pathDestination).catch((error: Error) =>
      this.catchError(error, isAsync)
    );

    /* ncp(pathToCopy, pathDestination, err => {
            if (err) {
            return console.error(err);
            }
            console.log("Copy dir done!");
        }); */
  };

  writeFile = (
    path: string,
    data: string,
    isAsync: boolean = false,
    utf: string = "utf-8"
  ) => {
    return promisify(writeFile)(path, data, utf).catch((error: Error) =>
      this.catchError(error, isAsync)
    );
  };

  //fs.readFile('/etc/passwd', 'utf8', callback);
  readFile = (
    path: string,
    isAsync: boolean = false,
    utf: string = "utf-8"
  ) => {
    return promisify(readFile)(path, utf).catch((error: Error) =>
      this.catchError(error, isAsync)
    );
  };

  deleteFile = (path: string, isAsync: boolean = false) => {
    return promisify(unlink)(path).catch((error: Error) =>
      this.catchError(error, isAsync)
    );
  };

  catchError = (error: Error, isAsync: boolean) => {
    if (isAsync) {
      console.log(`[ASYNC] ${error.message}`);
    } else {
      throw error;
    }
  };
}

export default FileSystemHelper;
