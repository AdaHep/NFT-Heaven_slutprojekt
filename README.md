# NFT-Heaven_slutprojekt

This was a school assignement where we were given a project with a finished client side web shop but without a backend. The task was to implement a Mongoose database to make the web shop complete!

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

Developers 👩‍💻👨‍💻👩‍💻

[Elin Arntén](https://github.com/elinarnten),
[Adam Hepsever](https://github.com/AdaHep) ,
[Miranda Nilhag](http://github.com/mirrenil) 



## G-KRAV:
- [X] Alla sidor skall vara responsiva.
- Alla sidor är responsiva ner till 360px!
- [X] Arbetet ska implementeras med en React frontend och en Express backend.
- Det är gjort!
- [X] Skapa ett ER diagram och koddiagram, detta ska lämnas in vid idégodkännandet.
- Done! Finns i mappen som heter skisser och dokumment!
- [X] Beskriv er företagsidé i en kort textuell presentation, detta ska lämnas in vid idégodkännandet.
- Se mappen skisser och dokumment!
- [X] All data som programmet utnyttjar ska vara sparat i en Mongo-databas (produkter, beställningar, konton mm). 
- All data sparas i Atlas 
- [X] Man ska kunna logga in som administratör i systemet.
- Admininloggning: email: admin@admin.admin lösenord: admin
- [X] Checkoutflödet i frontendapplikationen ska ha validering på samtliga fält.
- Vi använder formik som validering på checkoutflödet.
- [X] Inga Lösenord får sparas i klartext i databasen.
- Vi kör en delete.password när vi sparar användaren till databasen.
- [X] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen.
- När en användare gör en beställning uppdateras lagersaldot i databasen!
- [X] Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan.
- Admin kan manuellt uppdatera lagersaldot från adminsidan.
- [X] Administratörer ska kunna se en lista på alla gjorda beställningar.
- Admin kan se alla orders på adminsidan.
- [x] Tillgängliga fraktalternativ ska vara hämtade från databasen.
-  Aamtliga fraktalternativ är hämtade/sparade i databasen.
- [x] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
- Samtliga produkter tillhör en kategori och admin kan manuellt ändra kategorin.
- [x] Från hemsidan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.
- På explore kan man se alla produkter och man kan klicka på en kategori för att endast se produkter som tillhör en specifik kategori.
- [X] Besökare ska kunna lägga produkterna i en kundkorg, som är sparad i local-storage på klienten.
- Produkterna i varukorgen sparas i local-storage.
- [x] En besökare som gör en beställning ska få möjligheten att registrera sig samt logga in och måste vara inloggad som kund innan beställningen skapas.
- En besökare kan lägga till produkter i sin varukorg men för att beställa måste användaren först logga in eller registrera sig.
- [X] Besökare ska kunna välja ett av flera fraktalternativ.
- Det finns flera fraktalternativ att välja mellan.



## Design system

In this project we used components from [Material UI](https://mui.com/#/) that implements Google's [Material Design system](https://material.io/).
