//===============================================================
// Yuan Ze University Office of Library and Information Services
// Proxy Auto Configure
// Any comments, please contact http://proxy.yzu.edu.tw
//===============================================================

function FindProxyForURL(url, host)
{

        if (isPlainHostName(host) 
            || dnsDomainIs(host, ".yzu.edu.tw")
			|| isInNet(host, "140.138.0.0", "255.255.0.0"))
            return "DIRECT";
		
        else
            return "PROXY proxy6.yzu.edu.tw:8080";

}
	
	