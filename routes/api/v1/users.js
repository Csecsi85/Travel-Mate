const express = require('express');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const User = require('../../../models/User');

const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route   POST api/v1/users
// @desc    Register user
// @access  Public
router.get(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 8 or more characters'
		).isLength({ min: 8 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ errors: [{ msg: 'User already exsists' }] });
			}
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			});

			user = new User({
				name,
				email,
				password,
				avatar,
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save()
			res.send('user registered');
		} catch (error) {
			console.error(error.message);
			res.status(500).send('server error');
		}
	}
);

module.exports = router;
