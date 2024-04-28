// Tasks (Don't use promises, use only callbacks)
// 1. Write a function to download data from a URL
function download(url, clb) {
    //Downloads content from the given url and passed the downloaded content to the given callback cb
    console.log('Starting to download the data from', url);
    setTimeout(function down() {
        console.log("Downloading Completed");
        const content = 'ABCDEF'; //Assume dummy download content
        clb(content);
    }, 4000);
}
download('www.xyz.com', function process(content) {
    console.log("Downloaded data is", content);
})
// 2. Write a function to save that downloaded data in a file and return the filename
function writeFile(data, cb) {
    // Writes the given data into a new file
    console.log("Started writing a file with", data);
    setTimeout(function write() {
        console.log("Completed writing the data in a file");
        const fileName = 'file.txt';
        cb(fileName);
    }, 5000);
}
writeFile("abcdef", function process(name) {
    console.log('File written with name', name);
});


// 3. Write a function to upload the file written in previous step to a new url
function upload(url, file, cb) {
    // Uploads the data from a file to a given url
    console.log("Started Uploading", file, 'on', url);
    setTimeout(function up() {
        console.log("Upload Completed");
        const response = 'Success';
        cb(response);

    }, 5000)

}
download('www.xyz.com', function processDownload(content) {
    console.log("Processing the downloaded data");
    writeFile(content, function processWrite(fileName) {
        console.log("We have written the file");
        upload("www.upload.com", fileName, function processUpload(response) {
            console.log("We have uploaded with", response);

        })
    })

})