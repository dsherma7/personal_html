 //Global Variables
    var links = ["/wiki/Baily-Borel_theorem","/wiki/Morera's_theorem","/wiki/Prokhorov's_theorem","/wiki/Erdős–Pósa_theorem","/wiki/Tarski's_plank_problem","/wiki/Barbier's_theorem","/wiki/Bapat-Beg_theorem","/wiki/Kneser's_theorem_(combinatorics)","/wiki/Kneser's_theorem_(differential_equations)","/wiki/Kochen-Specker_theorem","/wiki/Kodaira_embedding_theorem","/wiki/Koebe_1/4_theorem"];
    var fields = ['algebraic geometry','complex analysis','measure theory','graph theory','geometry','geometry','statistics','combinatorics','differential equations','physics'];
    var titles = ["Tarski's plank problem","Barbier's theorem","Bapat–Beg theorem","Kneser's theorem (combinatorics)","Kneser's theorem (differential equations)","Kochen–Specker theorem","Kodaira embedding theorem","Koebe 1/4 theorem","Kolmogorov extension theorem","Kolmogorov–Arnold–Moser theorem","König's theorem (kinetics)","König's theorem (set theory)"];
   var links2 = ["/wiki/Absolute_convergence_theorem","/wiki/Ado's_theorem","/wiki/Arrival_theorem","/wiki/Szpilrajn_extension_theorem","/wiki/Universal_approximation_theorem","/wiki/Witt's_theorem","/wiki/Weierstrass_preparation_theorem","/wiki/Hirzebruch-Riemann-Roch_theorem","/wiki/Lester's_theorem","/wiki/Buckingham_%CF%80_theorem","/wiki/Pandya_theorem","/wiki/Ado's_theorem"];
   var pred = ["mathematical analysis","abstract algebra","stochastic processes","model theory","partial differential equations","algebraic number theory","differential equations","algebraic surfaces","algebraic curves","physics","physics","abstract algebra"];

    function change_page() {
      document.getElementById("WoldsThm").src="https://dsherma7.github.io/projects/mathnet/worldsthm.html";
    }

    function change_back() {
      document.getElementById("WoldsThm").src="https://en.wikipedia.org/wiki/Wold's_theorem" ;
    }
    
    function set_wordcloud() {
      var thm = document.getElementsByName('fields');      
      for (i = 0; i < fields.length; i++){
        if (thm[0].value == i.toString()){
            document.getElementById("wordcloud").src= 'https://dsherma7.github.io/projects/mathnet/plots/wordclouds/'+i.toString()+'.png';
            document.getElementById("bargraph").src= 'https://dsherma7.github.io/projects/mathnet/plots/bargraphs/'+i.toString()+'.png';          
            break;
          }
        } 
      }      

    function get_class() {
      var thm = document.getElementsByName('thms');      
      for (i = -1; i < links.length; i++){
        if (thm[0].value == i.toString()){
            document.getElementById("thm_page").src= 'https://en.wikipedia.org'+links[i];
            document.getElementById("class_txt").innerHTML=fields[i];
            break;
          }
        } 
      }      

    var thm1_val = -1;
    var thm2_val = -1;
    function get_class2() {
        var thm1 = document.getElementsByName('thms_a');
        var thm2 = document.getElementsByName('thms_b');
        if (thm1[0].value == thm1_val){
          thm = thm2;
        }else{
          thm = thm1;
        }

        thm1_val = thm1[0].value;
        thm2_val = thm2[0].value;
        for (i = -1; i < links2.length; i++){
          if (thm[0].value == i.toString()){
              document.getElementById("thm_page2").src= 'https://en.wikipedia.org'+links2[i];
              document.getElementById("class_txt2").innerHTML=pred[i];            
              document.getElementById("a"+i.toString()).selected=1;
              document.getElementById("b"+i.toString()).selected=1;            
              break;
            }
          } 
        }      
    
    function padzeros(x,maxLen){
      var out = x.toString();
      for (i=x.toString().length; i <= blah.toString().length; i++){
          out = '0'+out;
      }
      return(out);
    }

    function get_plots() {

        var plot = document.getElementsByName('plotType')[0].value;  
        switch(plot) {
            case "MNB":
                document.getElementById("plot").style="width:650px;height:300px;";
                document.getElementById("plot").src="https://dsherma7.github.io/projects/mathnet/plots/MNBBag.png";
                break;
                
            case "SVM":
                document.getElementById("plot").style="width:650px;height:300px;";
                document.getElementById("plot").src="https://dsherma7.github.io/projects/mathnet/plots/SVMBag.png";
                break;
                
            case "GridSearch":
                document.getElementById("plot").style="width:320px;height:300px;";
                document.getElementById("plot").src="https://dsherma7.github.io/projects/mathnet/plots/GridSearch.png";
                break;
            default:                
        }               
      }      
    
    //Initilize start value to 1 'For Slide1.GIF'
    var currentIndex=1;
    //NOTE: Set this value to the number of slides you have in the presentation.
    var maxIndex=10;

    function swapImage(imageIndex){        
        if(imageIndex>maxIndex){ //Check if we are at the last image already, return if we are.
            imageIndex=maxIndex;
            //return;
        }else if(imageIndex<1){  //Check if we are at the first image already, return if we are.
            imageIndex=1;
            //return;
        }

        currentIndex=imageIndex;
        //Otherwise update mainImage
        document.getElementById("mainImage").src='mathnet/Slides/Slide' +  currentIndex + '.png';
        return;
    }