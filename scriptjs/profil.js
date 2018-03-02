var data  = {nom:'NIARÉ',
            prenom:'Seydou',
            email: 'seydouniar@gmail.com',
            adresse: {voie: '200 Av de Vert Bois',code:'34000',ville:'Montpellier',pays:'France'},
            telephone: '0752825307',
            info:{nationnalite:'Malienne',ville:'Bamako',sexe:'Masculin',pays:'Mali',quartier:'Banconi',
            date_naissance:'24-09-1989' },
            desc:'',
            url_im:''
             }

    var profil=
    '<div class="container">'+
        '<div class="row "> <div class="col-sm-6 sidenav info"><h1 class = "text-primary">Information personnel</h1>'+
            '<div class="row"><div class="col-sm-3">'
               +' <img class="profile-image img-thumbnail img-circle" src="https://s18.postimg.org/ceoqz5sgp/1454697_1452705681423953_7155546759707234975_n.jpg">'+
            '</div>'+

            '<div class="col-sm-4 text-justify"><h4 class = "text-primary">Nom: </h4>'+
                '<p class="text-center">'+data.nom+'</p><h4 class = "text-primary">Prénom:</h4>'+
                '<p class="text-center">'+data.prenom+'</p><h4 class = "text-primary">e-mail:</h4>'+

                '<p class="text-center">'+data.email+'</p><h4 class = "text-primary">Telephone:</h4>'+
                '<p class="text-center">'+data.telephone+'</p><h4 class = "text-primary">Adresse:</h4>'+
                '<p class="text-center">'+data.adresse.voie+'</p><p class="text-center">'+data.adresse.code+' '+
                data.adresse.ville+','+data.adresse.pays+'</p></div></div></div>'+
                '<div class = "col-sm-6" style="background-color:yellow;></div></div></div>'
                ;

        
            
  document.getElementById('home').innerHTML=profil;