# DirtyPazu-Server
Serveur Node.js pour le dictionnaire Dibi.

[Site web en ligne du dictionnaire](https://dibi-dictionary.herokuapp.com/)

## Fonctionnalités
- Service en statique de la [web app du dictionnaire](https://github.com/MarioVieilledent/DirtyPazu-Client/tree/RepriseMars)
- Communication avec la web app part socket.op
- Propose un API pour récupérer la liste de tous les mots dibis au format JSON : [dictionnary/getWords/all](https://dibi-dictionary.herokuapp.com/dictionnary/getWords/all) 
- Sécurise les opérations admins avec un mot de passe
- Requête la base une base de données MongoDB privée qui contient notamment tous les mots dibis

Plus d'informations sur le site en ligne [dibi-dictionary](https://dibi-dictionary.herokuapp.com/)