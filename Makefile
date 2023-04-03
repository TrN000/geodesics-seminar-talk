
default:
	pandoc -s -t html --bibliography=resources.bib --citeproc --mathjax geodesics.tex > geodesics.html
