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
        document.getElementById("risultato").innerHTML='<h3>La tua posizione è: <span id="posizione"></span></h3>';
        document.getElementById("risultato").innerHTML+='<div id="list"></div>';
        var pos = listacogn.indexOf(cogn)+1;
        for(var i=0;i<listacogn.length;i++){
            document.getElementById("list").innerHTML+='<span>'+ listacogn[i] +'</span>';
        }
        document.getElementById("posizione").innerHTML=pos+'°';
        document.getElementById("risultato").className="box show m_top_10 pd_20 ";
        
    }

    }  
);   

   
   

    
