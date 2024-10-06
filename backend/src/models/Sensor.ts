import mongoose, { Types } from "mongoose";

export interface ISensor extends mongoose.Document {
    temperature_reading: string;
    pressure_reading: string;
    location: string;
    user_id?: Types.ObjectId;
    insole_id?: Types.ObjectId;
    note?: string;
}


const SensorSchema = new mongoose.Schema<ISensor>({
    temperature_reading: { type: String, required: true },
    pressure_reading: { type: String, required: true },
    location: { type: String, required: true },
    user_id: { type: Types.ObjectId, ref: 'User', required: true },
    insole_id: { type: Types.ObjectId, ref: 'Insole', required: true },
    note: { type: String, default: null },
}, {
    timestamps: true
})

export const Sensor = mongoose.model<ISensor>('Sensor', SensorSchema);