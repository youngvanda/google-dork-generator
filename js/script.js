function generateLinks() {
    var domain = document.getElementById('domain').value.trim();
    var dorks = [
        { category: 'Legacy Apps', dork: 'site:' + domain + ' ext:php | ext:aspx | ext:asp | ext:jsp | ext:html | ext:htm' },
        { category: 'Juicy Extensions 1', dork: 'site:' + domain + ' ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:tmp | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:xml | ext:tar | ext:sql.gz | ext:cfg' },
        { category: 'Juicy Extensions 2', dork: 'site:' + domain + ' ext:json | ext:pdf | ext:pwd | ext:yaml | ext:yml | ext:sql | ext:zip | ext:config | ext:java | ext:ora | ext:xsd | ext:xls | ext:xlsx | ext:reg | ext:gz | ext:csv | ext:docx | ext:password | ext:pem | ext:rdp | ext:inf' },
        { category: 'URL Parameters', dork: 'site:' + domain + ' inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http' },
        { category: 'URL Query Strings', dork: 'site:' + domain + ' inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:&' },
        { category: 'High % inurl keywords', dork: 'site:' + domain + ' inurl:config | inurl:env | inurl:setting | inurl:backup | inurl:admin | inurl:php' },
        { category: 'Sensitive Parameters', dork: 'site:' + domain + ' inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:&' },
        { category: 'API Docs', dork: 'site:' + domain + ' inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer' },
        { category: 'All Params', dork: 'site:' + domain + ' inurl:&' },
        { category: 'My Params 1', dork: 'site:' + domain + ' inurl:msg= | inurl:success= | inurl:display= | inurl:gift= | inurl:locale= | inurl:errorMessage= | inurl:aspxerrorpath=' },
        { category: 'My Params 2', dork: 'site:' + domain + ' inurl:cat | inurl:order | inurl:name= | inurl:search= | inurl:s= | inurl:message= | inurl:q= | inurl:error=' },
        { category: 'Email Leaks', dork: 'site:' + domain + ' inurl:"@yahoo.co" | inurl:"@live.com" | inurl:"@gmail.com"' },
        { category: 'Savage 1', dork: 'site:' + domain + ' "password" | "credential" | "username" | "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" | "WS_FTP" | "ws_ftp" | "log" | "LOG" filetype:log' },
        { category: 'Savage 2', dork: 'site:' + domain + ' "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" filetype:pdf' },
        { category: 'Savage 3', dork: 'site:' + domain + ' "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" filetype:xls' },
        { category: 'Savage 4', dork: 'site:' + domain + ' "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" filetype:csv' },
        { category: 'Savage 5', dork: 'site:' + domain + ' "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" filetype:doc' },
        { category: 'Savage 6', dork: 'site:' + domain + ' "not for distribution" | "confidential" | "employee only" | "proprietary" | "top secret" | "classified" | "trade secret" | "internal" | "private" filetype:txt' },
        { category: 'Sensitive Stuff', dork: 'site:' + domain + ' inurl:"/.git/config" | inurl:"/config" | intitle:"index of" | intitle:"phpinfo"' },
        { category: 'SQL Injection', dork: 'site:' + domain + ' intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"' },
        { category: 'XSS Prone Params', dork: 'site:' + domain + ' inurl:q= | inurl:s= | inurl:search= | inurl:query= inurl:&' },
        { category: 'ORedirect Prone Params', dork: 'site:' + domain + ' inurl:url= | inurl:return= | inurl:next= | inurl:redir= inurl:http' },
        { category: 'SQL Prone Params', dork: 'site:' + domain + ' inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:&' },
        { category: 'SSRF Prone Params', dork: 'site:' + domain + ' inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:&' },
        { category: 'LFI Prone Params', dork: 'site:' + domain + ' inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:&' },
        { category: 'RCE Prone Params', dork: 'site:' + domain + ' inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:&' },
        { category: 'Common Endpoints', dork: 'site:' + domain + ' inurl:(unsubscribe|register|feedback|signup|join|contact|profile|user|comment|api|developer|affiliate|upload|mobile|upgrade|password)' },
        { category: 'Default Pages', dork: 'site:' + domain + ' intitle:"Welcome to Nginx" | intitle:"index of" | intitle:"Apache2 Ubuntu Default Page: It works"' },
        { category: 'File Upload Endpoints', dork: 'site:' + domain + ' "choose file"' },
        { category: 'Apache Server Status Exposed', dork: 'site:' + domain + ' site:*/server-status apache' },
        { category: 'WordPress', dork: 'site:' + domain + ' inurl:/wp-admin/admin-ajax.php' },
        { category: 'Drupal', dork: 'site:' + domain + ' intext:"Powered by" & intext:Drupal & inurl:user' },
        { category: 'Joomla', dork: 'site:' + domain + ' site:*/joomla/login' },
        { category: 'Code Leaks', dork: 'site:' + domain + ' site:http://ideone.com | site:http://codebeautify.org | site:http://codeshare.io | site:http://codepen.io | site:http://repl.it | site:http://justpaste.it | site:http://pastebin.com | site:http://jsfiddle.net | site:http://trello.com "bountyme.com"' }
    ];

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    dorks.forEach(function(dorkObj) {
        var link = 'https://www.google.com/search?q=' + encodeURIComponent(dorkObj.dork);

        var linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank';
        linkElement.textContent = dorkObj.dork;

        var categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = '<h4>' + dorkObj.category + '</h4>';
        categoryElement.appendChild(linkElement);

        resultsDiv.appendChild(categoryElement)
    });
}
