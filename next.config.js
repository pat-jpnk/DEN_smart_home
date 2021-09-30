const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

const withImages = require('next-images')
module.exports = withImages()