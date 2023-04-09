This project provides a simple example of how you can create an API for resizing images using express and sharp.

### Prerequisites
- Node.js

### How to Use
To resize an image, send a POST request to the **/api/resize-image** endpoint with the following parameters:
- image
- width: The desired width of the image
- format: The desired format of the new image, default is webp

### Test with curl
- `npm install`
- `npm run dev`
- in a new terminal: `curl -X POST -F "image=@image.png" http://localhost:3000/api/resize-image\?format\=webps --output newFile.webp`
- you should have a new file **newFile.webp** in the root
