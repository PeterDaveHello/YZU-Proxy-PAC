
all: test proxy.pac
	touch all

proxy.pac: proxy.orig.pac
	curl -X POST -s --data-urlencode 'input@proxy.orig.pac' http://javascript-minifier.com/raw > proxy.pac
	sed -i 's/^/\/\*https:\/\/github.com\/YZU-OSG\/YZU-Proxy-PAC\*\//g' proxy.pac

clean:
	rm -rf proxy.pac

test: node_modules/jslint/bin/jslint.js proxy.orig.pac
	node_modules/jslint/bin/jslint.js proxy.orig.pac
	touch test

node_modules/jslint/bin/jslint.js:
	npm install
