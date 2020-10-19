var restify = require('restify');
var app_rest = require('./rest/routes')


var server = restify.createServer();
server.use(restify.plugins.bodyParser({
  mapParams: true
   }));

app_rest(server)


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

var restifySwaggerJsdoc = require('restify-swagger-jsdoc');
restifySwaggerJsdoc.createSwaggerPage({
    title: 'API documentation', // Page title
    version: '1.0.0', // Server version
    server: server, // Restify server instance created with restify.createServer()
    path: '/docs/swagger', // Public url where the swagger page will be available
    swaggerDefinition: {
      components: {},
      info: {
        title: '1',
        version: '2',
        description: '3',
      }
    },    
    apis: [ 'rest/routes.js'],
});