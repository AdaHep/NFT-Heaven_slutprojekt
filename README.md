# NFT-Heaven_slutprojekt

## How to run the project

First of all you need to install all the dependencies. You do this by typing `npm i` in the terminal. Next you open 2 terminals in your code editor and write the below commands separately:

```
cd server
npm i
npm start
Run the server on http://localhost:5500

cd client
npm i
npm start
Run the client on http://localhost:3000
```

Welcome to our webshop! Here you can find the latest and greatest NFTs for sale in cyberspace.

You can find the website here: [Netlify](nftheaven.netlify.app).

Developers 👩‍💻👨‍💻👩‍💻

[Elin Arntén](https://github.com/elinarnten),
[Adam Hepsever](https://github.com/AdaHep) ,
[Miranda Nilhag](http://github.com/mirrenil) 



## G-KRAV:
- [X] Alla sidor skall vara responsiva.
- [X] Arbetet ska implementeras med en React frontend och en Express backend.
- [X] Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet.
- [X] Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet.
- [X] All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm).
- [X] Man ska kunna logga in som administratör i systemet.
- [X] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält.
- [X] Inga Lösenord får sparas i klartext i databasen.
- [X] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.
- [X] Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan.
- [X] Administratörer ska kunna se en lista på alla gjorda beställningar.
- [x] Tillgängliga fraktalternativ ska vara hämtade från databasen.
- [x] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
- [x] Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.
- [X] Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten.
- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.
- [X] Besökare ska kunna välja ett av flera fraktalternativ.



## Design system

In this project we used components from [Material UI](https://mui.com/#/) that implements Google's [Material Design system](https://material.io/).
