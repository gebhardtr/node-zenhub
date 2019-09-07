var extend = require('xtend');
var request = require('request-promise');
var querystring = require('querystring');

var Http = function(credentials, url) {
    this.url = url || 'https://api.zenhub.io/p1';
    this.credentials = credentials;
};
/**
 * Helper to handle requests to the API with authorization
 *
 * @private
 * @param string    url             address part after API root
 * @param object    parameters      additional parameters
 * @callback        complete
 * @memberof        Http
 * @method          _get
 */
Http.prototype._get = function (url, parameters) {
    parameters = extend(parameters, this.credentials); // Add credentials to parameters
    var getURL = this.url + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

    return request.get({
        url: getURL,
        strictSSL: true,
        json: true
    });
};

/**
 * Helper to handle POST requests to the API with authorization
 *
 * @private
 * @param string    url             address part after API root
 * @param object    parameters      additional parameters
 * @param object    body            request body
 * @callback        complete
 * @memberof        Http
 * @method          _post
 */
Http.prototype._post = function(url, parameters, body) {
    parameters = extend(parameters, this.credentials); // Add credentials to parameters
    var postURL = this.url + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

    return request.post({
        url: postURL,
        strictSSL: true,
        json: true,
        body: body,
    });
};

/**
 * Helper to handle PUT requests to the API with authorization
 *
 * @private
 * @param string    url             address part after API root
 * @param object    parameters      additional parameters
 * @param object    body            request body
 * @callback        complete
 * @memberof        Http
 * @method          _put
 */
Http.prototype._put = function(url, parameters, body) {
    parameters = extend(parameters, this.credentials); // Add credentials to parameters
    var putURL = this.url + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

    return request.put({
        url: putURL,
        strictSSL: true,
        json: true,
        body: body,
    });
};

module.exports = Http;
