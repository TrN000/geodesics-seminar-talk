
default:
	pandoc -s \
		-t html \
		--bibliography=resources.bib \
		--citeproc \
		--mathjax \
		--include-in-header=./src/include_scripts \
		--include-before-body=./src/buttons.html \
		geodesics.tex > geodesics.html
