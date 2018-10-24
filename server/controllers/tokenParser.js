const Token = require('../models/Token');
exports.parseToken = function (req, res, next) {
        Token.count({token:req.headers.authorization||req.query.token || req.body.token}, function (err, data) {
            if (err) {
                res.json({code: 555, data: 'token错误'});
                res.end();
            } else {
                if (data < 1) {
                    res.json({code: 888, data: 'token错误'});
                } else {
                    console.log('111');
                    next();
                }
            }
        });
};
