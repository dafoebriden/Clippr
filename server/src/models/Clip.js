import { Schema } from "mongoose";

export const ClipSchema = new Schema(
    {
        authorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        caption: { type: String, required: true, maxLength: 85, minLength: 2 },
        gifUrl: { type: URL, required: true, maxLength: 500 }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)
ClipSchema.virtual('author', {
    localField: 'authorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})
