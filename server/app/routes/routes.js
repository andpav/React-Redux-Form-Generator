module.exports = function(app) {
	app.get('/forms', (req, res) => {

		const formsConfig = [
			{
				id: 'uniqueid1',
				name: 'my form 1',
				fields: [
					{
						label: 'field 1',
						type: 'input',
					},
				]
			},
			{
				id: 'uniqueid2',
				name: 'my form 2',
				fields: [
					{
						label: 'field 1',
						type: 'input',
					},
					{
						label: 'field 2',
						type: 'textarea',
					},
				]
			}
		];

		res.send(formsConfig);

/*
сделать чтение из файла
db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(item);
			}
		});*/
	});

/*	app.post('/notes', (req, res) => {
		const note = { text: req.body.body, title: req.body.title };
		db.collection('notes').insert(note, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});*/
};