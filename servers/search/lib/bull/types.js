// @flow
import type { SimplecastEpisode } from '../../../../types';

export type Job<JobData> = {|
  id: string,
  data: JobData,
  remove: () => Promise<void>,
  finished: () => Promise<void>,
|};

type JobOptions = {|
  jobId?: number | string,
  delay?: number,
  removeOnComplete?: boolean,
  removeOnFail?: boolean,
  attempts?: number,
  repeat?: {
    cron: string,
    tz: string,
  },
|};

interface BullQueue<JobData> {
  add: (data: JobData, options?: JobOptions) => Promise<any>;
  process: (
    cb: (job: Job<JobData>, done: Function) => void | Promise<any>
  ) => void;
  getJob: (id: string) => Promise<Job<JobData> | null>;
}

export type IndexPodcastsJobData = {};
export type IndexPodcastJobData = {
  id: number,
};
export type IndexEpisodeJobData = {
  episode: SimplecastEpisode,
};

export type Queues = {
  indexPodcastsInSearch: BullQueue<IndexPodcastsJobData>,
  indexPodcastInSearch: BullQueue<IndexPodcastJobData>,
  indexEpisodeInSearch: BullQueue<IndexEpisodeJobData>,
};
