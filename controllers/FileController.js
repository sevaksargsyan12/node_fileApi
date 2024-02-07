import {validate as validateId} from "uuid";
import FileService from "../sevices/FileService.js";

class FileController {
    async create(req, res, next) {
        try {
            const jsonData = JSON.stringify(req.body, null, ' ');

            const filename = await FileService.createWrite(jsonData);

            res.json({filename, success: true});
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const files = await FileService.getAllFiles();

            res.json({files, success: true});
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;

            if (!validateId(id)) {
                throw new Error('Given Id is not correct.');
            }

            const fileContent = await FileService.getOne(id);

            res.json(JSON.parse(fileContent));
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;

            if (!validateId(id)) {
                throw new Error('Given Id is not correct.');
            }

            const jsonData = JSON.stringify(req.body, null, ' ');

            await FileService.updateData(id, jsonData);

            res.json({success: true});
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;

            if (!validateId(id)) {
                throw new Error('Given Id is not correct.');
            }

            await FileService.delete(id);

            res.json({success: true});
        } catch (e) {
            next(e);
        }
    }
}

export default new FileController();