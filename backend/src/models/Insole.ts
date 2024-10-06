import mongoose, { Types } from "mongoose";

export interface IInsole extends mongoose.Document {
    serial_number: string;
    model: string;
    date_installed: Date;
    user_id?: Types.ObjectId;
    note?: string;
}

const InsoleSchema = new mongoose.Schema<IInsole>({
    serial_number: { type: String, required: true },
    model: { type: String, required: true },
    date_installed: { type: Date, required: true, default: Date.now },
    user_id: { type: Types.ObjectId, ref: 'User' },
    note: { type: String, default: null },
}, {
    timestamps: true
})

export const Insole = mongoose.model<IInsole>('Insole', InsoleSchema);