import mongoose, { Types } from "mongoose";

export interface ISmartInsole extends mongoose.Document {
    serial_number: string;
    model: string;
    date_installed: Date;
    user?: Types.ObjectId;
    sensor_readings: {
        temperature: number;
        pressure: number;
        location: string


    }
}

const InsoleSchema = new mongoose.Schema<ISmartInsole>({
    serial_number: { type: String, required: true },
    model: { type: String, required: true },
    date_installed: { type: Date, required: true },
    user: { type: Types.ObjectId, ref: 'User' },
    sensor_readings: {
        temperature: { type: Number, required: true },
        pressure: { type: Number, required: true },
        location: { type: String, required: true }
    }
}, {
    timestamps: true
});

export const Insole = mongoose.model<ISmartInsole>('Insole', InsoleSchema);