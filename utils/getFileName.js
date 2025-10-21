 function getFileName(file) {
   const filePath = file.path;
   //   "uploads\\movie\\BI7vrzbICJ9TFyK-qwNkKwNo.png"

   const fileSplit = filePath.split("\\");

   //   ["uploads" "movie" "BI7vrzbICJ9TFyK-qwNkKwNo.png"]

   return `${fileSplit[1]}/${fileSplit[2]}`;

   // movie/BI7vrzbICJ9TFyK-qwNkKwNo.png
 }

 module.exports = {
    getFileName,
 }
