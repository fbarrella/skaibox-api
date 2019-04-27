const File = require("../models/File");
const Box = require("../models/Box");

class FileController {
    async store(req, res) {
        // Criando um arquivo
        const skaibox = await Box.findById(req.params.id);
        const newFile = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });

        skaibox.files.push(newFile);
        await skaibox.save();

        req.io.sockets.in(skaibox._id).emit("newFile", newFile);

        return res.json(newFile);
    }
}

module.exports = new FileController;