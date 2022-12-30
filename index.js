// import Tools from "./assets/Tools.js"
        let index
        , filRouge_origin_URI = "https://github.com/OpenClassrooms-Student-Center/1603881-creez-votre-site-web-avec-html5-et-css3"
        , github_account = "mentor-OC-archist"
        , repo_name = "OCWD___P2_HTML5CSS3_filRouge"
        , default_working_branch = "develop"
        , prefix_host = "."
        , youtube_embed = "https://youtube.com/embed/"
        , oc_cours_domain = "https://openclassrooms.com/fr/cours/"
        , oc_project_domain = "https://openclassrooms.com/fr/projects/{PROJECT_NAME}/resources"
        , mentor_gihut_domain = "https://github.com/mentor-OC-archist/"
        , oc_gihut_domain = "https://github.com/OpenClassrooms-Student-Center/"
        //, tools = new Tools()
        
        //Tools.showSourceOnIframeLoad()

        select.onchange = selectOnchange
        select.focus()

        /**
         * REMPLIR LA BALISE <select/> AVEC LES TITRE jsonDatas[index].h
         */
        for(index in jsonDatas){
            let opt = document.createElement('option')
            opt.addEventListener('click',()=>{alert('jji')})
            opt.value = index
            opt.innerHTML = index+": "+jsonDatas[index].h
            opt.data = jsonDatas[index]
            // console.log(opt.data);
            select.append(opt)
        }
        const menu_data_template = {
            titles: {howto: "Comment utilisé ce format de pages web ?",enonce: "Énoncé",vid_sol_mentor: "Vidéo solution filRouge mentor",vid_cours_oc: "Vidéo du cours OC",link_cours_oc: "Lien vers le cours OC",link_filrouge_remix: "Lien vers le repo GitHub du fil-rouge revisité par le mentor",link_filrouge_origin: "Lien vers le repo GitHub du fil-rouge d'origine",codepen_collection: "Codepen collection/exercice en rapport",link_collection: "Liste de ressources & Liens utiles",mindmap: "Visialiser les fondementaux au travers d'un mindmap(s)",diaporama_img_cours: "Les inforgaphies issues du cours",dl_install: "Section downloads/install & Conseils",my_channel: "Lien vers ma chaîne Youtube \"mentor-archist\"",my_github: "Lien vers mon compte GitHub \"mentor-OC-archist\"",my_website: "Lien vers mon le siteweb dédié au parcours \"développeur-web\""}
            , icons: {howto: "&#8265;",enonce: "⊸",vid_sol_mentor: "⊸",vid_cours_oc: "",link_cours_oc: "",link_filrouge_remix: "",link_filrouge_origin: "",codepen_collection: "",link_collection: "",mindmap: "",diaporama_img_cours: "",dl_install: "",my_channel: "",my_github: "",my_website: ""}
            , icons_: {howto: "",enonce: "",vid_sol_mentor: "",vid_cours_oc: "",link_cours_oc: "",link_filrouge_remix: "",link_filrouge_origin: "",codepen_collection: "",link_collection: "",mindmap: "",diaporama_img_cours: "",dl_install: "",my_channel: "",my_github: "",my_website: ""}
            , domain: {howto: youtube_embed,vid_sol_mentor: youtube_embed,vid_cours_oc: youtube_embed,link_cours_oc: oc_cours_domain,link_filrouge_remix: mentor_gihut_domain,link_filrouge_origin: oc_gihut_domain,codepen_collection: "https://codepen.io/collection/"}
        }
        youtube_embed
oc_cours_domain
oc_project_domain
mentor_gihut_domain
oc_gihut_domain
        , li_sep = document.createElement('li')
        li_sep.className="sep";li_sep.innerHTML = "----------------"
        for(index in menu_data){
            console.log(index);

            // alert(lis_template)
            let li = document.createElement('li')
            li.id = index
            li.title = menu_data_template.titles[index]
            li.innerHTML = menu_data_template.icons_[index]
            li.addEventListener('click', menu_data.length > 1 ? menu_choose_link : modal)
            li.data = menu_data[index]
            document.querySelector('body>header>menu').append(li)

            //CRÉER UN SÉPARATEUR
            if(["howto", "vid_cours_oc", "codepen_collection", "diaporama_img_cours"].includes(index))
                document.querySelector('body>header>menu').append(li_sep.cloneNode(true)) 


            // }else{
                
            // }
        }
        function menu_choose_link(e){
            const target = e.target
            alert('ok')

        }
        function modal(e){
            const target = e.target
            , ifr = document.createElement('iframe')
            , f = document.querySelector('footer')
            , exit = document.createElement('span')
            , open = document.createElement('span')
            , upper = document.createElement('span')
            , reload = document.createElement('span')
            if(e.target.data[0].indexOf('http')==0){
                alert(e.target.data[0].indexOf('http')==0)
                alert(e.target.data[0])
                window.open(e.target.data[0], '_blank')
            }else if(menu_data_template.domain[e.target.id] && (menu_data_template.domain[e.target.id].indexOf("github") != -1 || menu_data_template.domain[e.target.id]?.indexOf("codepen") != -1)){
                alert(e.target.data[0]+" nnininu")
                window.open(menu_data_template.domain[e.target.id]+e.target.data[0], '_blank')
            }else{
                ifr.src = (menu_data_template.domain[e.target.id]||"") + e.target.data[0]
                console.log(ifr.src)
                exit.addEventListener('click', ()=>{f.classList.remove('modal')})
                exit.className = "exit"
                exit.title = "FERMER"
                open.addEventListener('click', ()=>{window.open(ifr.src, '_blank')})
                open.className = "open"
                open.title = "OUVRIR NOUVEL ONGLET"
                upper.addEventListener('click', ()=>{ifr.src=ifr.src+"/.."})
                upper.className = "upper"
                upper.title = "REMONTER DANS ARBORESCENCE"
                reload.addEventListener('click', ()=>{ifr.src=(menu_data_template.domain[e.target.id]||"") + e.target.data[0]})
                reload.className = "reload"
                reload.title = "RECHARGER LA PAGE"
                f.innerHTML = ""
                f.dataset.url = ifr.src
                f.append(ifr)
                f.append(exit)
                f.append(open)
                f.append(upper)
                f.append(reload)
                document.querySelector('footer').classList.add('modal')
            }
            // document.querySelector('footer').classList.remove('modal')
            
            
        }

        /**
         * REPÈRE LE HASH DE L'URL LORSQUE LE CLIENT ARRIVE SUR LA PAGE
         * ET CHARGE L'<option/> DU <select/> CORRESPONDANTE 
         */
        let s_array = Array.from(select.querySelectorAll('option'))
        if(document.location.hash != ""){
            for(let a in s_array)if("#"+s_array[a].value == document.location.hash){
                select.selectedIndex = a
                // console.log(a.value);
                // console.log('ok');
                select.onchange()
            }
        }
         
        /**
         * PERMET DE SELECTIONNER UN NOUVEL EXERCICE
         * //// @param {event onchange} that CE N'EST PAS VRAIMENT UTILISÉ xD
         */
        function selectOnchange(){
            // console.log();
            // alert(select.selectedIndex)
            // alert(select.childNodes[select.selectedIndex].value)
            // console.log(select.querySelectorAll('option')[select.selectedIndex]);
            let opt = select.querySelectorAll('option')[select.selectedIndex]
            // alert(opt.value)
            document.location.hash = select.value
            // console.log(select.value);



            if(location.host.indexOf('localhost')==-1 && location.host.indexOf('127.0.0.1')==-1)prefix_host = "https://raw.githubusercontent.com/"+github_account+"/"+repo_name+"/"+default_working_branch
            iframe.src = prefix_host+"/_/"+select.value
            iframe_enonce.src = prefix_host+"/_/"+select.value+"/ENONCE.html"
            iframe_sol.src = prefix_host+"/_/"+select.value+"/_/SOLUTION/"
            iframe_codebase.src = prefix_host+"/_/"


/*
            _codepens.innerHTML = opt.data.codepens && opt.data.codepens.map((url,i) => `<a href="${url}" target="_blank">Codepen ${select.value+" - "+(i+1)}</a>`)

            if(opt?.data?.begin!=false){
                _begin.href = filRouge_origin_URI+"/tree/"+select.value+"-exercice"
                _begin.innerHTML = select.value+"-exercice"
            }
            if(opt?.data?.begin!=false){
                _sol.href = filRouge_origin_URI+"/tree/"+select.value+"-solution"
                _sol.innerHTML = select.value+"-solution"
            }
*/

            /*
            if(opt.data.begin != "" && opt.data.begin.indexOf('codepen') == -1){
                copypast.className = ""
                from_root.innerHTML = "cd ./_/begins/"+select.value+"; npm run start"
                from_inner.innerHTML = "cd ../"+select.value+"; npm run start"
            }else copypast.className = "off"
            */
            


            /*
            h1.innerHTML = p.innerHTML = tasks_p.innerHTML = tasks_ol.innerHTML = ""
            h1.innerHTML = opt.data.h
            p.innerHTML = opt.data.p
            tasks_p.innerHTML = opt.data.tasks.p
            opt.data.tasks.ol.map((item) => { 
                let li = document.createElement('li')
                li.innerHTML = item
                li.style.width = window.innerWidth > 1000 
                    ? "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 2)) + "% - 1em)"
                    : "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 3)) + "% - 1em)"
                tasks_ol.append(li) 
            })
            */

        }

                
        /**
         * PERMET DE PASSER À L'EXERCICE ADJACENT
         * @param {INT} smthg CORRENSPOND AU NUMÉRO DE L'EXERCICE
         */
        function move(smthg){
            if(typeof smthg == "undefined" && select.selectedIndex>1){
                select.selectedIndex = select.selectedIndex - 1
                select.onchange()
            }
            if(typeof smthg != "undefined" && select.selectedIndex<26){
                select.selectedIndex = select.selectedIndex + 1
                select.onchange()
            }
            // console.log(s_array);
            // console.log(s_array[select.selectedIndex]);
            // console.log(s_array[select.selectedIndex].value);
            document.location.hash = s_array[select.selectedIndex].value
        }
        document.querySelector("header>a:first-of-type").addEventListener('click', (e)=>{e.preventDefault();move();})
        document.querySelector("header>a:last-of-type").addEventListener('click', (e)=>{e.preventDefault();move(1);})

        document.querySelectorAll("iframe.enhanced").forEach(ifr => { console.log(ifr); ifr.addEventListener('click', (self) => { window.open(self.target.src, '_blank') }) })
        