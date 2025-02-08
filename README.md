# Visitekaartje

Redesign je visitekaartje en bouw het met NodeJS en een REST API.

De instructie vind je in: [INSTRUCTIONS](https://github.com/fdnd-task/connect-your-tribe-profile-card/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De website is een klein kaartje met de projectnamen van semester 1. Wanneer er op een van de projecten wordt geklikt, verschijnt er een korte uitleg over mijn projecten van semester 1, met een link naar de websites.

https://github.com/user-attachments/assets/01cbf83c-571a-401a-aaf2-8fab6693fa74

<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Qr code naar live site

![image](https://github.com/user-attachments/assets/9e0bc966-cd0b-4ebf-ba12-545ea10a1ec7)




## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
HTML/ liquid
De HTML bestaat uit één checkbox en twee secties. Elk van deze drie elementen heeft een for-loop die data uit Whois haalt en deze in de elementen genereert, zodat de HTML-code niet herhaald wordt.

CSS
- In CSS maak ik gebruik van :has() & :checked om te kijken welke checkbox is aangevinkt. Afhankelijk van de condities wordt een animatie in CSS uitgevoerd.
- Om aandacht te trekken naar de buttons, heb ik een lopende border toegevoegd in een hoogcontrastkleur, zodat het meteen opvalt.

CSS animaties
- Voor de animatie maak ik gebruik van Disney-principes:
    - Anticipatie: de achtergrond komt van buiten het scherm en gaat iets verder voordat hij teruggaat naar zijn eindpositie. Het kaartje zelf beweegt ook in de omgekeerde richting van de achtergrond.
    - Staging: nadat de eerste animatie (anticipatie) klaar is, verschijnt de tekst met een fade-in.

https://github.com/user-attachments/assets/729bd1d5-6f9a-4643-a0e2-5410fd8eeac8


JavaScript
Je kunt meerdere checkboxes tegelijk aanklikken, maar ik wil dat er altijd maar één aan staat. Dit gedrag is vergelijkbaar met radio buttons, maar die kun je niet opnieuw aanklikken om ze uit te zetten.
Daarom heb ik JavaScript geschreven dat alle checkboxes uitschakelt zodra een nieuwe wordt aangevinkt.
Op deze manier kan ik een knop klikken om info op het scherm zetten en diezelfde knop gebruiken om de info weer weg te halen.

## Installatie

## Gebruik

## Bronnen
[lopende border](https://www.letsbuildui.dev/articles/how-to-animate-borders-in-css/?utm_source=chatgpt.com)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

