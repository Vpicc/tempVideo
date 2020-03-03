import fs from 'fs';


const file = fs.readFileSync('../example/sample.mp4');
const fileUrl = URL.createObjectURL(new Blob([file]));
export default fileUrl;
