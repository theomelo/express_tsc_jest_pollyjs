import { setupPolly } from "setup-polly-jest";
import { Polly } from "@pollyjs/core";
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';
import path from "path";

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

export default function autoSetupPolly() {
  return setupPolly({
    adapters: ['node-http'],
    mode: 'replay',
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__')
      }
    },
    recordIfMissing: true
  });
}
