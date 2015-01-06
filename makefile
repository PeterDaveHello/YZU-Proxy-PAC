
all: test proxy.pac
	touch all

proxy.pac: proxy.orig.pac
	curl -X POST -s --data-urlencode 'input@proxy.orig.pac' http://javascript-minifier.com/raw > proxy.pac
	sed -i 's/^/\/\*https:\/\/github.com\/YZU-OSG\/YZU-Proxy-PAC\*\//g' proxy.pac

clean:
	rm -rf proxy.pac

test: node_modules/jslint/bin/jslint.js proxy.orig.pac
	node_modules/jslint/bin/jslint.js proxy.orig.pac --color=ture --indent=2 --predef=isPlainHostName --predef=dnsDomainIs --predef=isInNet --predef=dnsResolve --sloppy --unparam --vars
	touch test

node_modules/jslint/bin/jslint.js:
	npm install
