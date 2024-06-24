let i = 0;
async function fetchData(){

    try{
        
        const newsHead = document.getElementById("headline");
        const newsElement = document.getElementById("newsElement").value.toLowerCase();
        const response = await fetch(`https://newsapi.org/v2/everything?q=${newsElement}&apiKey=a9a9a67442814cb39f7e5fefff6c0c58`);
        const newsLink = document.getElementById("newsLink");
        const imgElement = document.getElementById("newsImage");
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        

        const data = await response.json();
        console.log(data.articles[i]);
        const newsImage = data.articles[i].urlToImage;
        const headline = data.articles[i].title;
        const link = data.articles[i].url;
        newsLink.href = link;
        newsHead.textContent = headline;
        imgElement.src = newsImage;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
const prev = document.getElementById('previous');
const next = document.getElementById('next');
prev.addEventListener('click',()=>{
    i-- ;
    fetchData();

})
next.addEventListener('click',()=>{
    i++ ;
    fetchData();

})

function resetSearch(){
    i = 0;
    fetchData();
}

const icon = document.querySelector('.icon');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;

const themeCheck = () =>{
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        return;
    }
};

const themeSwitch = () =>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme","light");
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme","dark");
};
icon.addEventListener('click',()=>{
    themeSwitch();
})
themeCheck();
