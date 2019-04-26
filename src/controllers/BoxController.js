const Box = require("../models/Box");

class BoxController {
    async store(req, res) {
        const data = {
            title: req.body.title
        }

        const newBox = await Box.create({
            title: data.title
        });

        return res.json(newBox);
    }
}

module.exports = new BoxController;