# NFT-Heaven_slutprojekt
https://github.com/AdaHep/NFT-Heaven_slutprojekt

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


Developers 👩‍💻👨‍💻👩‍💻

[Elin Arntén](https://github.com/elinarnten),
[Adam Hepsever](https://github.com/AdaHep) ,
[Miranda Nilhag](http://github.com/mirrenil) 



## G-KRAV:
- [X] Alla sidor skall vara responsiva.
- Alla sidor är responsiva ner till 360px.
- [X] Arbetet ska implementeras med en React frontend och en Express backend.
- Kodbasen var gjord i React och vi har lagt till en Express backend.
- [X] Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet.
- Finns i mappen "Skisser och dokument"
- [X] Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet.
-  Finns i mappen "Skisser och dokument"
- [X] All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm).
- All data är sparad i Mongodb Atlas databas
- [X] Man ska kunna logga in som administratör i systemet.
- login: admin@admin.admin - pass: admin
- [X] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält.
- Alla fält valideras och det går inte att gå vidare utan att fylla i.
- [X] Inga Lösenord får sparas i klartext i databasen.
- Alla lösenord krypteras med bcrypt.
- [X] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.
- Fungerar
- [X] Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan.
- Görs ifrån adminsidan och "edit nft" menyn
- [X] Administratörer ska kunna se en lista på alla gjorda beställningar.
- Hittas på /adminOrderPage
- [x] Tillgängliga fraktalternativ ska vara hämtade från databasen.
- Det är dom
- [x] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
- Hittas på /products
- [x] Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.
- Varje kategori har en egen sida. 
- [X] Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten.
- Carten sparas i LS
- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.
- Besökaren tvingas logga in innan den kommer till checkout
- [X] Besökare ska kunna välja ett av flera fraktalternativ.
- Det är bara att välja och vraka!



## Design system

In this project we used components from [Material UI](https://mui.com/#/) that implements Google's [Material Design system](https://material.io/).
