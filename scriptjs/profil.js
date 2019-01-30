var data  = {nom:'NIARÉ',
            prenom:'Seydou',
            email: 'seydouniar@gmail.com',
            adresse: {voie: '200 Av de Vert Bois',code:'34000',ville:'Montpellier',pays:'France'},
            telephone: '0752825307',
            info:{nationnalite:'Malienne',ville:'Bamako',sexe:'Masculin',pays:'Mali',quartier:'Banconi',
            date_naissance:'24-09-1989' },
            desc:'Enfant du Mali.',
            url_im:''
             }

    var profil=
    '<div class="container">'+
        '<div class="row "> <div class="col-sm-5 sidenav info"><h1 class = "text-primary">Information personnel</h1>'+
            '<div class="row"><div class="col-sm-3">'
               +' <img class="profile-image img-thumbnail img-circle" src="data/user_default.png">'+
            '</div>'+

            '<div class="col-sm-4 text-justify"><h4 class = "text-primary">Nom: </h4>'+
                '<p class="text-center">'+data.nom+'</p><h4 class = "text-primary">Prénom:</h4>'+
                '<p class="text-center">'+data.prenom+'</p><h4 class = "text-primary">e-mail:</h4>'+

                '<p class="text-center">'+data.email+'</p><h4 class = "text-primary">Telephone:</h4>'+
                '<p class="text-center">'+data.telephone+'</p><h4 class = "text-primary">Adresse:</h4>'+
                '<p class="text-center">'+data.adresse.voie+'</p><p class="text-center">'+data.adresse.code+' '+
                data.adresse.ville+','+data.adresse.pays+'</p></div></div></div>'+
                '<div class = "col-sm-6 text-justify" id="desc">'+
                '<h3 class = "text-primary">À propos de moi</h3>'+
                '<p>Etudant en master <a target="_blank" href="http://www.univ-montp3.fr/miap/ens/miashs/master/index.html">MIASHS</a>'+
                ' de <a href="http://www.univ-montp3.fr/miap/ens/miashs/master/index.html">l\'université Paùl Valery de Montpellier</a>'+
                ', né à Bamako (Mali) le 24 Septembre 1989, j\'ai commencé mes études primaires l\'école de Korofina Nord'+
                '(Groupe Scolaire Bahaben Santara) à l\'age de 8 ans, après avoir eu le DEF (Diplôme d\'etude fondamentale), j\'ai fait'+
                ' le Lycée Bouillagui Fadiga de Bamako entre 2006 et 2009, obtenu le Baccalaureat Malien en 2009, j\'ai eu'+
                ' une du gouvernement Malien pour aller étudier à l\'université <a href="http://www.univ-tiaret.dz/?lang=2" target="_blank">'+
                'Ibn Khaldoun</a> de Tiaret en Algérie d\'où j\'ai fait la prémière année universitaire en Science et Technique de 2009 à 2010'+
                ', Ensuite j\'ai continué <a href="https://www.univ-sba.dz/index.php?lang=fr" target="_blank" >l\'université Djillali Liabes</a> de Sidi Bel Abbès'+
                '.</p>'+
                '<p>Obtenu la licence en Génie informatique à l\'université Djillali Liabes en 2012, puis le Master'+
                ' en Génie informatique en 2014, afin d\'ameliorer mes connaissances en informatique j\'ai opté pour la france'+
                ' en 2014-2015 pour faire le master Majeur informatique à l\'université Joseph Fourirer'+
                '(<a href="https://www.univ-grenoble-alpes.fr" target="_blank">Université Grenoble Alpes</a>) de Grenoble à'+
                '<a href="https://im2ag.univ-grenoble-alpes.fr" target="_blank"> L\'IM2AG</a>.</p>'+
                '<p>'+data.desc+'</p>'
                '</div></div></div>'
                ;

        
            
  document.getElementById('home').innerHTML=profil;