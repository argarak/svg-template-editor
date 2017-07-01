#!/bin/sh

pug -w *.* &
stylus -w css/*.styl &
http-server
