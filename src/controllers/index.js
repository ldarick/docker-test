"use strict";

require("dotenv/config");

exports.index = async (req, res) => {
	try {
		if (req.params.n) {
			let t1 = Date.now();
			let value = await calc(0, 1, req.params.n - 2);
			let t2 = Date.now();
			res.status(200).send({ value: value, time: t2 - t1 });
		} else {
			res.status(400).send({ error: true });
			return;
		}
	} catch (e) {
		console.log(e);
		res.status(500).send({ error: e });
		return;
	}
};

const calc = async (old_value, value, n) => {
	if (n <= 0) return old_value + value;
	return calc(value, old_value + value, --n);
};
