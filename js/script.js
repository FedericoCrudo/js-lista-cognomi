var element = document.getElementById('inserire');
  element.addEventListener('click',
  function() {
    var cogn= document.getElementById("cogn").value;
    cogn=cogn.charAt(0).toUpperCase()+ cogn.slice(1).toLowerCase(); //prendiamo la prima lettera e la trasformiamo in maiuscolo. Con slice indichiamo il range iniziale della string.Cosi facendo otteniamo il risultato sperato
    var listacogn=["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
    if(cogn==""){
        document.getElementById('message').innerHTML= '<span id="text">Si prega di compilare tutti i campi<span>';
        
    }
    else{
        document.getElementById('message').innerHTML= '';
        listacogn.push(cogn);
        
        listacogn.sort();
        console.log(listacogn);
    }

    //  fruits.sort();//ordine alfabetico
    }  
);   

   
   

    
