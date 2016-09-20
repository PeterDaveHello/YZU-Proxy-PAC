
.PHONY : all

all: test proxy.pac

proxy.pac: proxy.src.pac
	@curl -X POST -s --data-urlencode 'input@proxy.src.pac' http://javascript-minifier.com/raw > proxy.pac
	@sed -i 's/^/\/\* https:\/\/github.com\/YZU-OSG\/YZU-Proxy-PAC \*\/\n/g' proxy.pac

clean:
	@rm -rf proxy.pac

test: node_modules/jslint/bin/jslint.js proxy.src.pac
	@node_modules/jslint/bin/jslint.js proxy.src.pac
	@touch test

node_modules/jslint/bin/jslint.js:
	@npm install
