const express = require('express');
const auth = require('../../../middleware/auth');
const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const router = express.Router();

// @route   GET api/v1/auth
// @desc    Auth route
// @access  Public
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
});

// @route   POST api/v1/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
	'/',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists(),
	],
	async (req, res) => {
		const { email, password } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid credentials' }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'Invalid credentials' }] });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};

			// TODO: Change expiresIn time to something more reasonable
			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{ expiresIn: 360000 },
				(error, token) => {
					if (error) throw error;
					res.json({ token });
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('server error');
		}
	}
);

module.exports = router;
