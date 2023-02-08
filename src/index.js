async function rechercher() {
    console.log('click');

    // Recuperer l' input
    const input = document.getElementById('searchTermInput').value;    

    // Rechercher le valeur saisi dans le JSON
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);

    const json = await response.json();
    console.log(json);
    const containercoktail = document.querySelector('.containercoktail'); 
    containercoktail.innerHTML ='';
    let list = document.createElement('div') ;
    list.classList.add('listeCoktail');

    //Parcourir le resultat
    for(i= 0; i<json.drinks.length; i++){
      const imgLink = json.drinks[i].strDrinkThumb; 
      const drinkName = json.drinks[i].strDrink;

      // Creer div coktail
      const coktailElement = document.createElement('div');
      coktailElement.classList.add('coktail');
     
      // creer l'image
      const imgCocktail = document.createElement('img');
      imgCocktail.setAttribute('src', imgLink);
      imgCocktail.setAttribute('alt', "");
      coktailElement.append(imgCocktail);

      // Creer div product-name
      const descElement = document.createElement('div');
      descElement.classList.add('product-name');      
      
      // Creer paragraphe p
      const nameElement = document.createElement('p');
      nameElement.classList.add('name');
      nameElement.innerHTML=drinkName;
      
      // Inserer les elements
      descElement.append(nameElement);
      coktailElement.append(descElement);
      list.append(coktailElement); 
      
    }
    containercoktail.append(list)
  } 
