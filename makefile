
proxy.pac: proxy.orig.pac
	curl -X POST -s --data-urlencode 'input@proxy.orig.pac' http://javascript-minifier.com/raw > proxy.pac

clean:
	rm -rf proxy.pac

