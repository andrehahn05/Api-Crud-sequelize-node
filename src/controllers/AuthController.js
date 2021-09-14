import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async store(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ error: 'Credencias do not match ' });

    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({ error: 'Credencias do not match' });
    }

    const { id, name } = user;
    const secret = process.env.AUTH_SECRET;
    const token = jwt.sign({ id, email }, secret, {
      expiresIn: 8640,
    });

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token,
    });
  }
}

export default new AuthController();
