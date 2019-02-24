# MovieList

Test to Ahgora, using Omdb as source of data

## Installation

Use a apache2 and php enviroment

Clone the project 

Folders which must have a 777 permission: img, css, js

Set up the web server accordenly

Ex:
/var/etc/sites-avaiable/sites-enabled
<VirtualHost *:80>
    ServerName ahgora.local

    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/ahgora/public

    <Directory /var/www/html/ahgora>
        AllowOverride All
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

Add a line to the file /etc/hosts/ 
Ex: 127.0.0.1       ahgora.local


## Usage

http://ahgora.local/

Shows the screen

## Third-Party
 Bootstrap - As a source to JS plugins to use as modal, for example
 Boilerplate - as an scaffold for html,css and js 

## License
[MIT](https://choosealicense.com/licenses/mit/)