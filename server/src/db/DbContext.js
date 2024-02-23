import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ClipSchema } from '../models/Clip'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Clips = mongoose.model('Clip', ClipSchema)
}

export const dbContext = new DbContext()
