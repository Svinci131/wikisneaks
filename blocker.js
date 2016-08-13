_ini();

function _ini(){

    document.getElementsByTagName("html")[0].style.display="none";

    window.onload=function(){

        //do your stuff

        document.getElementsByTagName("html")[0].style.display="block"; //to show it all back again

    }

}
