// @flow
import { createQueue } from './create-queue'
;

export default (name: string, cb: any) => createQueue(name).process(cb);
