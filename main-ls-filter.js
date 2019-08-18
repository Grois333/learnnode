
const lsFilter = require('./module-ls-filter');

const pathname = process.argv[2];
const ext = process.argv[3];

// console.log(lsFilter);

lsFilter(pathname, ext, (err, filenames) => {
  if(err) console.log('reading file failed');
  filenames.forEach(filename => console.log(filename));
});
