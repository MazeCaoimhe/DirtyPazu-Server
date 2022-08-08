# DirtyPazu-Server
Serveur Node.js pour le dictionnaire Dibi.

[Site web en ligne du dictionnaire](https://dibi-dictionary.herokuapp.com/)

# Fonctionnalités
- Service en statique de la [web app du dictionnaire](https://github.com/MarioVieilledent/DirtyPazu-Client/tree/RepriseMars)
- Communication avec la web app part socket.op
- Propose un API pour récupérer la liste de tous les mots dibis au format JSON : [dictionnary/getWords/all](https://dibi-dictionary.herokuapp.com/dictionnary/getWords/all) 
- Sécurise les opérations admins avec un mot de passe
- Requête la base une base de données MongoDB privée qui contient notamment tous les mots dibidans une div `block`s

Plus d'informations sur le site en ligne [dibi-dictionary](https://dibi-dictionary.herokuapp.com/)

# API saisie HTML

## Règles obligatoires :

- Chaque div de classe `block` commençant par un titre `h2` *la div block a une belle séparation de section et le titre h2 est centré*
- Les tableaux dans une `div` de classe `table` *la div table permet un bel affichage smartphone*
- Les exemples dans une `div` de classe `example` *la div example affiche un cadre avec un texte "Exemple"*

## Format de texte

Des classes permettent de styliser le texte sans passer par du style dans le code HTML

- `left` aligne le texte à gauche (par défaut)
- `middle` aligne le texte au milieu
- `right` aligne le texte à droite
- `bold` texte gras
- `italics` texte italique
- `underline` texte souligné

## Couleurs

Classes pour colorer du texte :

- `red`, `green`, `blue`, `cyan`, `magenta`, `yellow`, `grey`

Attention, pour que le texte soit sur une seule ligne, le texte stylisé doit se trouver dans des `<span>` elles-même dans une `<span>` pour faire une ligne unique.

Exemple :
```html
<span>Une <span class="red bold">unique</span> ligne</span>
<span>Une <span class="italic center">autre ligne</span></span>
```

## Titres

- `<h1>` Titre principal (un seul dans l'HTML)
- `<h2>` Titre des div `block` (un seul par div block)
- `<h3>` Plusieurs titres dans une div `block`
- `<h4>` Plusieurs sous titres dans une div `block`
- `<h5>` Plusieurs sous sous titres dans une div `block`
- `<h6>` Plusieurs sous sous sous titres dans une div `block`
