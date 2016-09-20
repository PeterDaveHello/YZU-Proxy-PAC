[![Build Status](https://travis-ci.org/YZU-OSG/YZU-Proxy-PAC.svg?branch=master)](https://travis-ci.org/YZU-OSG/YZU-Proxy-PAC) [![devDependency Status](https://david-dm.org/YZU-OSG/YZU-Proxy-PAC/dev-status.svg)](https://david-dm.org/YZU-OSG/YZU-Proxy-PAC#info=devDependencies) [![license](http://img.shields.io/badge/license-GPL3-brightgreen.svg?style=flat)](https://www.gnu.org/licenses/gpl-3.0.txt)

Proxy Auto Config for YZU
=========

It's a proxy auto config for people in Yuan Ze University,
it will select a good route for your network connection, so it can:

  - Save your network traffic (Traffic in the campus will be ignored)
  - Speed up your network performance (Select a "right" proxy server will surely make your network transmission faster)

---------

We use [JavaScript Minifier](http://javascript-minifier.com/)([jscompress.com](http://jscompress.com/) before 4-5-2014) to minified the proxy.pac,

minified version will not appear on the git repo, and can be downloaded from:

http://proxy.cse.yzu.edu.tw/proxy.pac

PS: To prevent causing strange problems, IP not inside Yuan Ze University will get a DIRECT connect result from:  [proxy.direct.pac](https://github.com/YZU-OSG/YZU-Proxy-PAC/raw/master/proxy.direct.pac)

---------

Development environment requirement:

- curl
- GNU sed
- GNU make
- nodejs
- npm
- Internet
- text editor

---------

Issue, feedback & pull request are welcome.
