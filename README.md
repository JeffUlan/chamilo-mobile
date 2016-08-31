Chamilo LMS Mobile app
================================

Instalaci�n
-----------------------------

Primero, clonar este repositorio

```
git clone git@github.com:nosolored/chamilo-mobile.git
cd chamilo-mobile
```

A�adir la plataforma Android

```
cordova platform add android
cordova plugin add cordova-plugin-pdialog
cordova plugin add cordova-plugin-spinner
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-file-transfer
cordova plugin add cordova-plugin-inappbrowser
```

Construir el APK de Android

```
cordova build android
```

Ejecutar sobre un dispositivo Android

```
cordova run android
```

* La carpeta "chamilo-app" debe ser copiada en el directorio plugin de la plataforma chamilo.
* Para poder visualizar las im�genes de las secciones de mensajes, descripci�n, anuncios y foros, debemos modificar el fichero .htaccess de la carpeta "courses".
```
RewriteCond %{HTTP_USER_AGENT} !android [NC]
RewriteRule ([^/]+)/document/(.*)$ /main/document/download.php?doc_url=/$2&cDir=$1 [QSA,L]
```
