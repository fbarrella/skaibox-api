const Box = require("../models/Box");

class BoxController {
    async store (req, res) {
        const data = {
            title: req.body.title
        }

        const newBox = await Box.create({
            title: data.title
        });

        return res.json(newBox);
    }

    async show (req, res){
        const skaibox = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {
                sort: { createdAt: -1 }
            }
        });

        return res.json(skaibox);
    }
}

module.exports = new BoxController;