function FindProxyForURL(url, host) {

  var dt = 'DIRECT';

  //direct
  if (isPlainHostName(host)
      || dnsDomainIs(host, 'yzu.edu.tw')
      || dnsDomainIs(host, 'most.gov.tw')   //file upload limit from most
      || dnsDomainIs(host, 'mediafire.com') //IP limit
      || dnsDomainIs(host, 'localhost')
      || dnsDomainIs(host, 'cse.tw')
      ) {
    return dt;
  }

  var prefix = 'PROXY proxy';
  var postfix = '.yzu.edu.tw:8080;';

  var proxy2 = prefix + '2' + postfix;
  var proxy6 = prefix + '6' + postfix;

  if (dnsDomainIs(host, 'mobile01.com')
      || dnsDomainIs(host, 'tw.yahoo.com')
      || dnsDomainIs(host, 'tw.news.yahoo.com')
      || dnsDomainIs(host, 'youtube.com')
      || dnsDomainIs(host, 'youtu.be')
      || dnsDomainIs(host, '1e100.net')
      || dnsDomainIs(host, 'appledaily.com.tw')
      || dnsDomainIs(host, 'ettoday.net')
      || dnsDomainIs(host, 'ck101.com')
      || dnsDomainIs(host, 'techbang.com')
      || dnsDomainIs(host, 'pixnet.net')
      || dnsDomainIs(host, 'xuite.net')
      || dnsDomainIs(host, 'wikipedia.org')
      || dnsDomainIs(host, '24h.pchome.com.tw')
      || dnsDomainIs(host, 'shopping.pchome.com.tw')
      || dnsDomainIs(host, 'ruten.com.tw')
      || dnsDomainIs(host, 'rimg.com.tw')//ruten image
      || dnsDomainIs(host, 'coolpc.com.tw')
      || dnsDomainIs(host, 'hamicloud.net')
      || dnsDomainIs(host, 'ptt.cc')
      || dnsDomainIs(host, 'jsdelivr.net')
      || dnsDomainIs(host, 'cdnjs.cloudflare.com')
      || dnsDomainIs(host, 'yam.com')
      || dnsDomainIs(host, 'cht.tw')
      || dnsDomainIs(host, 'sourceforge.net')
      || (dnsDomainIs(host, 'hinet.net') && !dnsDomainIs(host, 'hichannel.hinet.net') && !dnsDomainIs(host, 'cpbl-hichannel.cdn.hinet.net'))
      || dnsDomainIs(host, 'tra.gov.tw')
      || dnsDomainIs(host, 'autobuy.tw')
      || dnsDomainIs(host, 'edu.tw')
      || dnsDomainIs(host, 'jorsindo.com')
      || dnsDomainIs(host, 'reddit.com')
      || dnsDomainIs(host, 'net.tw')
      || dnsDomainIs(host, 'nchc.org.tw')
      || dnsDomainIs(host, 'twaren.net')
      || dnsDomainIs(host, 'ati.com')
      || dnsDomainIs(host, 'amd.com')
      || dnsDomainIs(host, 'tw.freebsd.org')
      || dnsDomainIs(host, 'sitetag.us')
      || dnsDomainIs(host, 'edgesuite.net')
      ) {
    return proxy2 + proxy6 + dt;
  }

  var proxy3 = prefix + '3' + postfix;

  if (dnsDomainIs(host, 'imgur.com')
      || dnsDomainIs(host, 'plurk.com')
      || dnsDomainIs(host, 'feedly.com')
      || dnsDomainIs(host, 'vimeo.com')
      || dnsDomainIs(host, 'kkbox.com')
      || dnsDomainIs(host, 'adobe.com')
      || dnsDomainIs(host, 'taobao.com')
      || dnsDomainIs(host, 'microsoft.com')
      || dnsDomainIs(host, 'github.com')
      || dnsDomainIs(host, 'github.io')
      || dnsDomainIs(host, 'githubusercontent.com')
      || dnsDomainIs(host, 'xiaomi.com')
      || dnsDomainIs(host, 'hichannel.hinet.net')
      || dnsDomainIs(host, 'cnet.com')
      || dnsDomainIs(host, 'dd-wrt.com')
      || dnsDomainIs(host, 'koding.com')
      || dnsDomainIs(host, 'download.documentfoundation.org')
      || dnsDomainIs(host, 'seagate.com')
      ) {
    return proxy3 + proxy6 + dt;
  }

  /*if (dnsDomainIs(host, 'cpbl-hichannel.cdn.hinet.net')) {
    return '1007.cse.yzu.edu.tw:3128;DIRECT';
  }*/

  var ip = dnsResolve(host);
  if (isInNet(ip, '140.138.0.0', '255.255.0.0')
      || isInNet(ip, '192.168.0.0', '255.255.0.0')
      || isInNet(ip, '127.0.0.0', '255.0.0.0')
      || isInNet(ip, '10.0.0.0', '255.0.0.0')
      || isInNet(ip, '172.16.0.0', '255.240.0.0')
      ) {
    return dt;
  }

  if (isInNet(ip, '140.112.0.0', '255.240.0.0')
      || isInNet(ip, '140.128.0.0', '255.240.0.0')
      || isInNet(ip, '134.208.0.0', '255.255.0.0')
      || isInNet(ip, '163.13.0.0', '255.252.0.0')
      || isInNet(ip, '163.15.0.0', '255.255.0.0')
      || isInNet(ip, '163.19.116.0', '255.255.255.0')
      || isInNet(ip, '163.21.98.0', '255.255.255.0')
      || isInNet(ip, '163.22.0.0', '255.255.0.0')
      || isInNet(ip, '163.32.84.0', '255.255.255.0')
      || isInNet(ip, '192.83.167.0', '255.255.224.0')
      || isInNet(ip, '192.83.186.0', '255.255.255.0')
      || isInNet(ip, '192.83.192.0', '255.255.252.0')
      || isInNet(ip, '192.192.0.0', '255.255.0.0')
      || isInNet(ip, '120.107.0.0', '255.255.0.0')
      || isInNet(ip, '120.109.0.0', '255.255.128.0')
      || isInNet(ip, '120.113.0.0', '255.255.128.0')
      || isInNet(ip, '120.125.86.0', '255.255.255.0')
      || isInNet(ip, '203.64.0.0', '255.255.0.0')
      || isInNet(ip, '203.71.84.0', '255.255.240.0')
      || isInNet(ip, '210.71.78.0', '255.255.255.0')
      || isInNet(ip, '210.71.118.0', '255.255.255.0')
      || isInNet(ip, '211.75.81.81', '255.255.255.255')
      ) {
    return proxy2 + proxy6 + dt;
  }
  return proxy6 + proxy3 + dt;
}
