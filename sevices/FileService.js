import {v4 as uuidV4} from "uuid";
import * as path from "path";
import fs from "fs/promises";

class FileService {
    async createWrite(data, fileGivenName = '') {
        const fileName = fileGivenName || uuidV4() + '.json';
        const filePath = path.resolve('static', fileName);

        await fs.writeFile(filePath, data);

        return fileName;
    }

    async getAllFiles() {
        const files = await fs.readdir(path.resolve('static'));

        return files;
    }

    async getOne(fileBaseName) {
        const file = await fs.readFile(path.resolve('static', fileBaseName + '.json'), {encoding: 'utf-8'});

        return file;
    }

    async updateData(fileBaseName, data) {
        const filePath = path.resolve('static', fileBaseName) + '.json';

        await fs.access(filePath);
        await this.createWrite(data, filePath);

        return true;
    }

    async delete(fileBaseName) {
        const filePath = path.resolve('static', fileBaseName) + '.json';

        await fs.rm(filePath);
    }
}

export default new FileService();