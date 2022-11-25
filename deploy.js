const path = require("path");
const exec = require("@actions/exec");

let deploy = function (SOURCE_DIRECTORY, S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID, INVALIDATION) {
  return new Promise((resolve, reject) => {
    try {
      const command = `npx s3-deploy@1.4.0 ./** \
                        --bucket ${S3_BUCKET} \
                        --cwd . \
                        --distId ${CLOUDFRONT_DISTRIBUTION_ID} \
                        --etag \
                        --gzip xml,html,htm,js,css,ttf,otf,svg,txt \
                        --invalidate "${INVALIDATION}" \
                        --noCache `;

      const cwd = path.resolve(SOURCE_DIRECTORY);
      exec.exec(command, [], { cwd }).then(resolve).catch(reject);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = deploy;
