function generatorRDP(targetID, filename, address, domain, username)
{
	var fdata = "";

	fdata += "full address:s:"+ address +"\n";
	fdata += "domain:s:"+ domain +"\n";
	fdata += "username:s"+ username;

	var btn = document.getElementById(targetID);

	btn.href =  "data:text/plain;charset=utf-8," + encodeURIComponent(fdata);

	btn.download = filename;
}