module.exports = function(imagen_base_64, name){
    try{
        function decodeBase64Image(dataString) {
            let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
            let response = {}
        
            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
        
            response.type = matches[1]
            response.data = new Buffer(matches[2], 'base64')
        
            return response
        }
        
        // Regular expression for image type:
        // This regular image extracts the "jpeg" from "image/jpeg"
        let imageTypeRegularExpression      = /\/(.*?)$/
        
        // Generate random string // cambié esto por name
        /* let crypto = require('crypto')
        let seed = crypto.randomBytes(20)
        let uniqueSHA1String = crypto.createHash('sha1').update(seed).digest('hex') */
        
        let imageBuffer = decodeBase64Image('data:image/jpeg;base64,' + imagen_base_64)
        let userUploadedFeedMessagesLocation = __dirname + '../public/img/'
        
        let uniqueRandomImageName = name;
        // This variable is actually an array which has 5 values,
        // The [1] value is the real image extension
        let imageTypeDetected = imageBuffer.type.match(imageTypeRegularExpression)
        
        let userUploadedImagePath = userUploadedFeedMessagesLocation + uniqueRandomImageName + '.' + imageTypeDetected[1]
        
        // Save decoded binary image to disk
        try{
            require('fs').writeFile(userUploadedImagePath, imageBuffer.data,  
            function() {
                console.log('DEBUG - feed:message: Saved to disk image attached by user:', userUploadedImagePath)
            })
        }
        catch(error){
            console.log('ERROR:', error)
        }
    }
    catch(err){
        console.log('no se pudo decodificar y/o guardar el archivo')
    }
}