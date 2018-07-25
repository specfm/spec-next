// @flow
import { createQueue } from './create-queue'

export default (name: string, cb: any) => {
  return createQueue(name).process(cb);
}