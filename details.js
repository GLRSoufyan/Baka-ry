const Details = {
    "Brown Butter Almond Croissant Pumpkin Coffee Cake": {
        Details: "Lekker aarbeien tartje. Super romig en zoet.",
        Benodigdheden: "aardbei, slagroom, taartbodem, suiker",
        Recept: "Maak de taartbodem klaar, voeg room toe, beleg met aardbeien en bestrooi met suiker.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/brownbutter.jpg"
    },
    "Giant Maple Pecan Pretzel Sticky Bun": {
        Details: "Luchtige en romige chocolademousse.",
        Benodigdheden: "pure chocolade, eieren, suiker, slagroom",
        Recept: "Smelt chocolade, klop eieren en suiker, vouw room erdoor en laat opstijven in de koelkast.",
        Moeilijkheidsgraad: 2,
        Sterren: 5,
        Afbeelding: "../fotos/maplebun.jpg"
    },
    "Chocolate Chip Banana Bread Focaccia": {
        Details: "Frisse citroentaart met knapperige bodem.",
        Benodigdheden: "citroen, eieren, suiker, taartbodem, boter",
        Recept: "Maak de bodem, bereid citroencrème en bak kort. Laat afkoelen en serveer.",
        Moeilijkheidsgraad: 3,
        Sterren: 4,
        Afbeelding: "../fotos/chocbread.jpg"
    },
    "Pumpkin Pecan Crisp with Maple Cinnamon Brown Butter Sauce": {
        Details: "Luchtige vanillecupcakes met zachte frosting.",
        Benodigdheden: "bloem, eieren, boter, suiker, vanille-extract, melk",
        Recept: "Mix de ingrediënten, vul vormpjes en bak. Voeg frosting toe als ze afgekoeld zijn.",
        Moeilijkheidsgraad: 2,
        Sterren: 4,
        Afbeelding: "../fotos/pumpkinpecan.jpg"
    },
    "Homemade Old-Fashioned Apple Cider Donuts": {
        Details: "Heerlijke worteltaart met een romige roomkaaslaag.",
        Benodigdheden: "wortel, bloem, eieren, suiker, olie, roomkaas, noten",
        Recept: "Meng de droge en natte ingrediënten, voeg geraspte wortel toe, bak en bestrijk met roomkaas frosting.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/appledonuts.jpg"
    },
    "Mini Classic Cinnamon Roll": {
        Details: "Warme appeltaart met knapperige crumble bovenop.",
        Benodigdheden: "appel, bloem, boter, suiker, kaneel",
        Recept: "Snijd appels, meng met suiker en kaneel, bedek met crumble en bak goudbruin.",
        Moeilijkheidsgraad: 2,
        Sterren: 5,
        Afbeelding: "../fotos/cinnaroll.jpg"
    },
    "Cinnamon Crunch Apple Pie Cathead Biscuits": {
        Details: "Luchtige rolcake met groene theesmaak.",
        Benodigdheden: "bloem, eieren, suiker, matcha, slagroom",
        Recept: "Bak een dunne sponge cake met matcha, rol met slagroom en laat opstijven.",
        Moeilijkheidsgraad: 3,
        Sterren: 4,
        Afbeelding: "../fotos/cinnacrunch.jpg"
    },
    "Brown Butter Sweet Potato Cake": {
        Details: "Italiaanse koffiedessert met mascarpone en cacao.",
        Benodigdheden: "mascarpone, eieren, suiker, koffie, lange vingers, cacao",
        Recept: "Doop lange vingers in koffie, laag mascarpone crème, herhaal en bestrooi met cacao.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/potatocake.jpg"
    },
    "Apple Pie Maple Donut Bars": {
        Details: "Romige cheesecake met een krokante bodem.",
        Benodigdheden: "roomkaas, eieren, suiker, koekjes, boter",
        Recept: "Maak een koekjesbodem, meng de vulling en bak of laat opstijven in de koelkast.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/donutbars.jpg"
    },
    "Apple Pie Brown Butter Oatmeal Cookie Skillet": {
        Details: "Rijke en smeuïge chocoladebrownie.",
        Benodigdheden: "pure chocolade, boter, suiker, eieren, bloem",
        Recept: "Smelt chocolade en boter, voeg suiker en eieren toe, meng met bloem en bak.",
        Moeilijkheidsgraad: 2,
        Sterren: 5,
        Afbeelding: "../fotos/applepie.jpg"
    },
    "Old-Fashioned Chocolate Donuts Holes with Salted Chocolate Hazelnut Glaze": {
        Details: "Knapperige buitenkant met zachte binnenkant.",
        Benodigdheden: "amandelmeel, eiwitten, suiker, kleurstof, vulling",
        Recept: "Klop eiwitten met suiker, spatel amandelmeel erdoor, bak kleine rondjes en vul met ganache of crème.",
        Moeilijkheidsgraad: 5,
        Sterren: 5,
        Afbeelding: "../fotos/chocdonut.jpg"
    },
    "Bourbon Almond Praline Sweet Potato Cheesecake": {
        Details: "Luchtig en zoet bananenbrood.",
        Benodigdheden: "rijpe bananen, bloem, eieren, boter, suiker, bakpoeder",
        Recept: "Prak bananen, meng met overige ingrediënten, giet in bakvorm en bak goudbruin.",
        Moeilijkheidsgraad: 2,
        Sterren: 4,
        Afbeelding: "../fotos/almpraline.jpg"
    },
};
 
const recipeList = document.getElementById('recipe-list');
 
function showRecipes() {
    Object.keys(Details).forEach(recipeName => {
        const recipe = Details[recipeName];
        
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        
        recipeDiv.innerHTML = `
            <h3>${recipeName}</h3>
            <div class="img-box">
                <img src="${recipe.Afbeelding}" alt="${recipeName}">
            </div>
            <button onclick="goToDetails('${recipeName}')">See recept</button>
        `;
        
        recipeList.appendChild(recipeDiv);
    });
}
 
function goToDetails(recipeName) {
    localStorage.setItem('currentRecipe', recipeName);
    window.location.href = 'recept-details.html';
}
 
window.onload = showRecipes;