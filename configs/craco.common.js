const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/../src`);

module.exports = {
    webpack: {
        alias: {
            '@shared': `${PATH_SRC}/shared/`,
            '@components': `${PATH_SRC}/components/`,
            '@pages': `${PATH_SRC}/pages/`,
            '@app': `${PATH_SRC}/app/`,
        },
    },
};