buger=document.querySelector('.buger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navlist=document.querySelector('.nav-list')



burger.addEventlistenerr('Click',()=>{
    rightNav.classlist.toggle('v.class-resp');
    navlist.classlist.toggle('v.class-resp');
    navbar.classlist.toggle('h.nav-resp');

})