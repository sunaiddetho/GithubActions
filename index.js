import { getInput, setFailed } from '@actions/core';
import deploy from './deploy';

async function run() {
  try {
    const folder = getInput('folder');
    const bucket = getInput('bucket');
    const destinationDir = getInput('destination-dir');
    const vsersionDir = getInput('version-dir');
    const distId = getInput('dist-id');
    const invalidation = getInput('invalidation');

    await deploy(folder, bucket, distId, invalidation);
  }
  catch (error) {
    setFailed(error.message);
  }
}

run()
