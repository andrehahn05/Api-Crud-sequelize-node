import User from '../models/User';

class UserController {
  async store(req, res) {
    try {

      const user = await User.create(req.body);
      user.password = undefined
      return res.json(user).status(200);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['not found ...'],
        });
      }

      const userAt = await user.update(req.body);
      const { id, name, email } = userAt;
      return res.json({ id, name, email });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),

      });
    }
  }

  async index(req, res) {

    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
      order: [['id', 'ASC'], 
      ],
    });

    return res.json(users);
  }

  async show(req, res) {
    try {
      const id = await User.findByPk(req.userId);
      if (!id) {
        return res.status(400).json({
          errors: ['not found ...'],
        });
      }
      const user = await User.findAll({
        attributes: ['id', 'name', 'email'], where: { id: req.userId },
      });
      return res.json(user);

    } catch (error) {
      return res.json(error).status(500);
    }
  }

  async delete(req, res) {
    try {

      const id = await User.findByPk(req.userId);

      if (!id) {
        return { msg: 'No Id specified..', payload: 1 };
      }

      await User.destroy({
        where: { id: req.userId },
      });
      return res.status(200).json({ message: 'Deleted successfully' });
    } catch (e) {
      return res.status(404).json({ message: 'record not found' });
    }

  }
}

export default new UserController();
