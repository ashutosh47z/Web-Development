const fs = require('fs');
const { Transform } = require('stream');
const readStream = fs.createReadStream(__dirname + '/run.txt');
const transformedStream = new Transform({
    transform(chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 3000);
    }
});
const writeStream = process.stdout;
readStream
    .pipe(transformedStream)
    .pipe(writeStream);
