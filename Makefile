.PHONY: site

default: serve

serve: site
	cd site && python -m SimpleHTTPServer

site:
	mkdir -p site
	rsync -a assembled/ site/
	rsync -a static/ site/
