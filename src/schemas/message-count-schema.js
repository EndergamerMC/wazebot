import pkg from 'mongoose';
const { Schema, model, models } = pkg;

const messageCountSchema = new Schema({
    _id: {
        // Discord User ID
        type: String,
        required: true
    },
    messageCount: {
        type: Number,
        required: true
    }
});

const name = "message-counts";
export default models[name] || model(name, messageCountSchema);