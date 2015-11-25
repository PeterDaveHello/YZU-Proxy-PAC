//===============================================================
// Yuan Ze University Office of Library and Information Services
// Proxy Auto Configure
// Any comments, please contact http://proxy.yzu.edu.tw
//===============================================================

function FindProxyForURL(url, host) {
		
	// Connect to Campus
	if(isPlainHostName(host)
			|| dnsDomainIs(host,".yzu.edu.tw")
			|| isInNet(host, "140.138.0.0", "255.255.0.0")
			|| isInNet(host,"192.168.0.0","255.255.0.0")
			|| isInNet(host,"127.0.0.0","255.0.0.0")
			|| isInNet(host,"10.0.0.0","255.0.0.0")
		)
		return "DIRECT";
		
	else if (isInNet(myIpAddress(),"140.138.223.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.224.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.225.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.226.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.227.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.228.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.229.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.230.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.231.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.232.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.233.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.240.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.241.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.242.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.243.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.244.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.246.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.247.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.248.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.249.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.238.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.239.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.234.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.235.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.236.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.237.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.252.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.32.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.33.0","255.255.255.0")
			 || isInNet(myIpAddress(),"140.138.34.0","255.255.255.0")
			 ) 
	 {
		 return "PROXY proxy7.yzu.edu.tw:8080";
	 } 
	 	                                  
	// all other URLs not match any rules
	else {
		return "PROXY proxy6.yzu.edu.tw:8080";
	}
}
