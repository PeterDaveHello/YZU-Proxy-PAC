
all: test proxy.pac
	@touch all

proxy.pac: proxy.pac.src
	@curl -X POST -s --data-urlencode 'input@proxy.pac.src' http://javascript-minifier.com/raw > proxy.pac
	@sed -i 's/^/\/\*https:\/\/github.com\/YZU-OSG\/YZU-Proxy-PAC\*\//g' proxy.pac

clean:
	@rm -rf proxy.pac

test: node_modules/jslint/bin/jslint.js proxy.pac.src
	@node_modules/jslint/bin/jslint.js proxy.pac.src
	@touch test

node_modules/jslint/bin/jslint.js:
	@npm install
