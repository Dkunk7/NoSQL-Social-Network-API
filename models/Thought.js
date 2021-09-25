// Reaction is a subdoc of Thought
const { Schema, model, Types } = require(`mongoose`);
const dateFormat = require(`../utils/dateFormat`);

const ReactionSchema = new Schema(
    {
        reactionId: { // Sets custom Id so as not to confuse with implied Though _id
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        },
        // I think this is supposed to prevent _id from appearing? But it doesn't seem to be working.
        _id: false
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

ThoughtSchema.virtual(`reactionCount`).get(function() {
    return this.reactions.maxlength;
});

const Thought = model(`Thought`, ThoughtSchema);

module.exports = Thought;