const user = [{
    name: 'Dhe',
    email: 'dhe@gmail.com',
    phone: 1236547890
}]

const getUsers = (req, res) => {
    res.send({
      message: "Users are displayed here",
      user: user,
    });
  };

  module.exports = {
    getUsers
  }
