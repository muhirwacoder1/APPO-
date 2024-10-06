import { ref } from 'joi';
import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IAlert extends Document {
    alert_message: string;
    alert_type: string;
    user_id: Types.ObjectId;
    status: string;
}

const AlertSchema: Schema = new Schema({
    alert_message: { type: String, required: true },
    alert_type: { type: String, required: true },
    user_id: { type: Types.ObjectId, required: true, ref: 'User' },
    status: { type: String, required: true, default: 'Unresolved' }
}, {
    timestamps: true
})

export const Alert = mongoose.model<IAlert>('Alert', AlertSchema);