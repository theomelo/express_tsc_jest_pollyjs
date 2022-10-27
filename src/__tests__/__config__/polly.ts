import { Polly } from "@pollyjs/core";
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';
import path from "path";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const polly = new Polly(
  'testing',
  {
    adapters: ['node-http'],
    mode: 'replay',
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__')
      }
    },
    recordIfMissing: true
  }
);

export default polly;


