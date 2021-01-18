# THE PAST, PRESENT & FUTURE OF LOCAL STORAGE FOR WEB APPLICATIONS
## DIVING IN
* Cookies are included with every HTTP request, thereby slowing down your web application by needlessly transmitting the same data over and over
* Cookies are included with every HTTP request, thereby sending data unencrypted over the internet (unless your entire web application is served over SSL)
* Cookies are limited to about 4 KB of data — enough to slow down your application (see above), but not enough to be terribly useful
* What we really want is
  - a lot of storage space
  - on the client
  - that persists beyond a page refresh
  - and isn’t transmitted to the server

## USING HTML5 STORAGE
* Calling setItem() with a named key that already exists will silently overwrite the previous value. Calling getItem() with a non-existent key will return null rather than throw an exception.

* Like other JavaScript objects, you can treat the localStorage object as an associative array. Instead of using the getItem() and setItem() methods, you can simply use square brackets.
* Calling removeItem() with a non-existent key will do nothing.
* If you call key() with an index that is not between 0–(length-1), the function will return null.

