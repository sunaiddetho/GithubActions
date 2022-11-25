import { getInput, setFailed } from '@actions/core';
import deploy from './deploy';

async function run() {
  try {
    const folder = getInput('SOURCE_DIRECTORY');
    const bucket = getInput('S3_BUCKET');
    const destinationDir = getInput('DESTINATION_DIR');
    const vsersionDir = getInput('VERSION_DIR');
    const distId = getInput('CLOUDFRONT_DISTRIBUTION_ID');
    const invalidation = getInput('INVALIDATION');

    await deploy(SOURCE_DIRECTORY, S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID, INVALIDATION);
  }
  catch (error) {
    setFailed(error.message);
  }
}

run()
