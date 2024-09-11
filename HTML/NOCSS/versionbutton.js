function toggle(versionName)
{
    localStorage.setItem("version",versionName)
    document.getElementById("cssSheet").href = localStorage.getItem("version");
}




window.onload = function(){

    if(localStorage.getItem("version") === null)
    {
            localStorage.setItem("version","CSS/version1.css");
    }
    document.getElementById("cssSheet").href=localStorage.getItem("version"); // get and change css element
};


