# Cordova_apply
Application mobile

désoler pour les fautes je les corrigerai au fur et a mesure

INSTALLER ET CONFIGURER CORDOVA ET ANGULARJS + ENVIRONNEMENT ANDROID ET IOS



***
INTRODUCTION :
- installer cordova sur le site internet : https://angularjs.org/,
- télécharger AngularJS sur le site internet https://angularjs.org/
- installer NodeJS sur le site internet https://nodejs.org/

Attention :

Vous pouvez aussi installer cordova en passant par les ligne de commande NodeJS : 
npm install -g cordova
afin de vérifier si l'installation sais bien passer vous pouvez entrer la ligne de commande :
cordova --version




***
CREATION PROJET CORDOVA :
pour crée un projet cordova, entrer la ligne de commande suivante :
cordova create nom_application fr.nom_domaine_inverser.nom_application nom_application
exemple : cordova create application1 fr.pharmarket.application1 Application1






***
CONFIGURATION IOS :
télécharger et installer xcode

Sous ios ses super simple, ouvrir le terminal et se placer sur le dossier du projet puis lancer la ligne de commane suivante :
cordova plateforms add ios
celuis ci va crée un dossier plateforms et va placer les library de xcode, ensuite double clique sur le petit logo xcode, pour ouvir le projet sur xcode qui sera ensuite fonctionnel (reste plus qu'a cree la UIWebViews pour simuler le navigateur et pouvoir l'utiliser directement sous IOS).





***
CONFIGURATION ANDROID : 
télécharger et installer android studio

télécharger le jdk dans le site d'oracle
puis placer la variable d'environnement du jdk qui doit se trouver dans votre dossier programme/jdk sous Windows.

placer dans la variable d'environnement le sdk après que Android studio l'aura télécharger automatiquement.

télécharger apache-ant et placer en variable d'environnement le fichier qui se trouve dans le dossier bin de apache-ant.

Après avoir installer et bien mis en place ces différent programme, pour vérifier si il sont bien tous installer faire un 
java --version
ant --version
adb --help

Ensuite tous comme sous IOS maintenan quand a bien tous les programme nécessaire a Android on peu entrer la commande suivante :
cordova plateforms add android.

cordova va crée un dossier android et va allez placer toutes les librairie nécessaire a android studio, vous pouvez ensuite ouvrir le projet en double cliquant sur le fichier android studio. (il reste plus qu'a crée la webview).




***
L'ARCHITECTURE ET LA BASE ANGULAR (actuellement dessus je suis en train de faire un bonne base pour bien commencer.)

...ICI explication de l'architecture...








