const Details = {
    "Brown Butter Almond Croissant Pumpkin Coffee Cake": {
        Details: "Heerlijke koffie-cake met een rijke bruine boter en een knapperige amandeltopping.",
        Benodigdheden: "bruine boter, amandelen, bloem, suiker, eieren, melk, bakpoeder",
        Recept: "Smelt de bruine boter en meng met de andere ingrediënten. Bak in een vorm en top af met amandelen.",
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
        Details: "Heerlijke herfstcombinatie van pompoen en pecannoten met een warme bruine boter saus.",
        Benodigdheden: "pompoen, pecannoten, bruine boter, kaneel, suiker, bloem",
        Recept: "Meng de pompoen met suiker, voeg de pecannoten toe en bak in de oven. Serveer met bruine boter saus.",
        Moeilijkheidsgraad: 2,
        Sterren: 4,
        Afbeelding: "../fotos/pumpkinpecan.jpg"
    },
    "Homemade Old-Fashioned Apple Cider Donuts": {
        Details: "Traditionele donuts met appelcider, perfect voor herfstomstandigheden.",
        Benodigdheden: "appelcider, bloem, suiker, kaneel, eieren, bakpoeder",
        Recept: "Meng alle ingrediënten en bak de donuts in een vorm. Bestrooi met suiker en kaneel.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/appledonuts.jpg"
    },
    "Mini Classic Cinnamon Roll": {
        Details: "Warme, klassieke kaneelrolletjes met een romige glazuur.",
        Benodigdheden: "bloem, suiker, boter, kaneel, gist",
        Recept: "Rol het deeg uit, strooi kaneelsuiker erover en bak. Voeg glazuur toe wanneer ze afgekoeld zijn.",
        Moeilijkheidsgraad: 2,
        Sterren: 5,
        Afbeelding: "../fotos/cinnaroll.jpg"
    },
    "Cinnamon Crunch Apple Pie Cathead Biscuits": {
        Details: "Luchtige biscuits met een smaakvolle kaneel-crunch en appelvulling.",
        Benodigdheden: "bloem, appel, kaneel, boter, melk, suiker",
        Recept: "Maak het deeg voor de biscuits, voeg appel en kaneel toe, bak de biscuits goudbruin.",
        Moeilijkheidsgraad: 3,
        Sterren: 4,
        Afbeelding: "../fotos/cinnacrunch.jpg"
    },
    "Brown Butter Sweet Potato Cake": {
        Details: "Heerlijk zachte cake gemaakt met bruine boter en zoete aardappel.",
        Benodigdheden: "zoete aardappel, bruine boter, bloem, suiker, eieren, bakpoeder",
        Recept: "Kook de zoete aardappel en meng met de andere ingrediënten. Bak in een cakevorm.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/potatocake.jpg"
    },
    "Apple Pie Maple Donut Bars": {
        Details: "Romige appelpie met een esdoornachtige smaak in een donutvorm.",
        Benodigdheden: "appel, bloem, suiker, kaneel, esdoornsiroop, boter",
        Recept: "Maak een deeg voor de bodem en de vulling, bak in een vierkante vorm en snijd in bars.",
        Moeilijkheidsgraad: 3,
        Sterren: 5,
        Afbeelding: "../fotos/donutbars.jpg"
    },
    "Apple Pie Brown Butter Oatmeal Cookie Skillet": {
        Details: "Een heerlijke koek met appelpie-smaak, gemaakt in een skillet met bruine boter.",
        Benodigdheden: "havermout, bloem, appel, bruine boter, suiker",
        Recept: "Meng de ingrediënten en bak het geheel in een skillet voor een crispy buitenkant.",
        Moeilijkheidsgraad: 2,
        Sterren: 5,
        Afbeelding: "../fotos/applepie.jpg"
    },
    "Old-Fashioned Chocolate Donuts Holes with Salted Chocolate Hazelnut Glaze": {
        Details: "Heerlijke klassieke chocolade-donuts met een gezouten hazelnootglazuur.",
        Benodigdheden: "pure chocolade, hazelnoten, suiker, bloem, eiwitten, kleurstof",
        Recept: "Maak het donutdeeg, bak de gaten, en bedek met het gezouten chocolade-hazelnootglazuur.",
        Moeilijkheidsgraad: 5,
        Sterren: 5,
        Afbeelding: "../fotos/chocdonut.jpg"
    },
    "Bourbon Almond Praline Sweet Potato Cheesecake": {
        Details: "Romige cheesecake met een vleugje bourbon en een heerlijke amandel-praline topping.",
        Benodigdheden: "zoete aardappel, bourbon, amandelen, roomkaas, suiker, eieren",
        Recept: "Meng de ingrediënten voor de cheesecake en bak in een taartvorm. Top af met de amandel-praline.",
        Moeilijkheidsgraad: 3,
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
            <img class="img-box" src="${recipe.Afbeelding}" alt="${recipeName}"></img>
            <button onclick="goToDetails('${recipeName}')">Zie recept</button>
        `;
        
        recipeList.appendChild(recipeDiv);
    });
}
 
function goToDetails(recipeName) {
    localStorage.setItem('currentRecipe', recipeName);
    window.location.href = 'recept-details.html';
}
 
window.onload = showRecipes;