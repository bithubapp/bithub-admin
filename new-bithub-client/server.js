#!/usr/bin/env node
var fs = require('fs');
var path = require("path");
var program = require('commander');

var pkg = require('can-ssr/package.json');
var server = require('can-ssr/lib/server');
var exec = require('child_process').exec;
var Cookies = require('cookies');
var http = require('http');

program.version(pkg.version)
  .usage('[options]')
  .description(pkg.description)
  .option('-d, --develop', 'Enable development mode (live-reload)')
  .option('-p, --port <port>', 'The server port')
  .option('-r, --proxy <url>', 'A URL to an API that should be proxied')
  .option('-t, --proxy-to <path>', 'The path to proxy to (default: /api)')
  .option('-l, --no-live-reload', 'Turn off live-reload')
  .option('--live-reload-port <port>', 'Port to use for live-reload')
  .option('--steal-tools-path <path>', 'Location of your steal-tools')
  .parse(process.argv);

var options = {
  path: process.cwd(),
  liveReload: program.liveReload,
	configure: function(app){
		app.use(function(req, res, next){
			var cookies = new Cookies(req, res);
			var sessionId = cookies.get('_session_id');
			if(sessionId){
				global.__railsSessionId = sessionId;
			}
			next();
		});
	}
};

if(program.proxy) {
  options.proxy = program.proxy;
  options.proxyTo = program.proxyTo;
}

// Spawn a child process in development mode
if(program.develop) {
	var stealToolsPath = program.stealToolsPath ||
		path.join("node_modules", ".bin", "steal-tools");
	if(!fs.existsSync(stealToolsPath)) {
		console.error('live-reload not available: ' +
			'No local steal-tools binary found. ' +
			'Run `npm install steal-tools --save-dev`.');
	} else {
		var cmd = stealToolsPath + ' live-reload';
		if(program.liveReloadPort) {
			cmd += ' --live-reload-port ' + program.liveReloadPort;
		}
		var child = exec(cmd, {
			cwd: process.cwd()
		});

		child.stdout.pipe(process.stdout);
		child.stderr.pipe(process.stderr);

		var killOnExit = require('infanticide');
		killOnExit(child);
	}
}

var app = server(options);
var port = program.port || process.env.PORT || 3030;
var server = app.listen(port);

// We should never hit this if the user is logged in
app.use(function(req, res, next){
	res.redirect(process.env.BITHUB_HOST + '/accounts/sign_in');
});

server.on('error', function(e) {
	if(e.code === 'EADDRINUSE') {
		console.error('ERROR: Can not start can-serve on port ' + port +
			'.\nAnother application is already using it.');
	} else {
		console.error(e);
		console.error(e.stack);
	}
});

server.on('listening', function() {
	var address = server.address();
	var url = 'http://' + (address.address === '::' ?
			'localhost' : address.address) + ':' + address.port;

	console.log('can-serve starting on ' + url);
});
