
class Controller {

  start(req, res) {
    res.status(200).send({status: "success"});
  }

}

module.exports = new Controller();