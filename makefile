
.PHONY : all

all: test proxy.pac

proxy.pac: node_modules/uglify-js/bin/uglifyjs proxy.src.pac
	@"./node_modules/uglify-js/bin/uglifyjs" --mangle --compress if_return=true -o proxy.pac proxy.src.pac
	@sed -i 's/^/\/\* https:\/\/github.com\/PeterDaveHello\/YZU-Proxy-PAC \*\/\n/g' proxy.pac

clean:
	@rm -rf proxy.pac

test: node_modules/jslint/bin/jslint.js proxy.src.pac
	@node_modules/jslint/bin/jslint.js proxy.src.pac
	@touch test

node_modules/jslint/bin/jslint.js:
	@npm install
