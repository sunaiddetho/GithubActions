const S3 = require('aws-sdk/clients/s3');
const s3 = new S3({ apiVersion: '2006-03-01' });

const dirs = await s3
      .listObjectsV2({
        Bucket: `xpro-dev`,
        Prefix: `url`,
        Delimiter: '/'
      })
      .promise();
	  
const versions = dirs.CommonPrefixes.map(cp => cp.Prefix.split('/')[1]).filter(v =>
      (/^v\d{1,4}$/).test(v)
    );
	
const getVersion = (textVersions = []) => {
  try {
    if (textVersions.length === 0) {
      return 1;
    }
    const versions = textVersions.map(tv => parseInt(tv.replace('v', ''), 10));
    return Math.max(...versions) + 1;
  } catch (error) {
    throw error;
  }
};
