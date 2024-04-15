import mongoose from "mongoose";

const connectionURL = `mongodb+srv://projectplaytopia:1234@playtopia.f4fkwmu.mongodb.net/`;
// const connectionURL = `mongodb+srv://app:1234@app.retr5ep.mongodb.net/`;

const connect = () => {
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}

	mongoose.connect(connectionURL, {
		dbName: "benefitdb",
	}).then(() => {
		console.log('Complete connection to benefitdb');
	}).catch((err) => {
		console.log('Fail connection to database');
		console.error(err);
	})
}

export default connect;
