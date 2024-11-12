/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached :MongooseConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {
         conn: null , promise:null
        }
}

export const connectToDatabase = async () =>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('missing MONGODB URL');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL , {dbName:'imagify' , bufferCommands:false})

        cached.conn = await cached.promise;

        return cached.conn;
}
