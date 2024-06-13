const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Schema to create reaction schema
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId(),},
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
},
{
    toJSON: {
        getters: true,
    },
    id: false,
});

// Schema to create Thought model
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp)},
    username: { type: String, required: true },
    reactions: [reactionSchema],
}, 
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// Create a virtual property 'reactionCount' that gets the amount of reactions per thought
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
