import { Schema, model } from "mongoose";

const fnbExplainSchema = new Schema(
	{
		ref_id:{
			type: Schema.Types.ObjectId,
			ref: 'fnbSchema',
			unique: true,
		},
		menu: {
			type: String,
		},
		time: {
			type: String,
		},
		phone_num: {
			type: String,
		},
		guide: {
			type: String,	
		},
		img: {
			type:String
		}
	}
)

export default model("FnbExplainSchema", fnbExplainSchema);