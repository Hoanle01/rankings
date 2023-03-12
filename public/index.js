// window.onscroll = function () { myFunction() };
 let d=new Date()
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
button1.addEventListener('click', event => {
  button1.classList.remove('dim');
  event.preventDefault();
  button2.classList.add('dim');
  $(document).ready(function () {
    loadTopRanking('type=POST')
  })
});

button2.addEventListener('click', event => {
  event.preventDefault()
  // window.history.replaceState({},'', '/home?name="WAN TO GO"');
  // window.location.assign('/home?name="WAN TO GO"')
  button2.classList.remove('dim');
  button2.classList.add('lim');

  $(document).ready(function () {
    loadTopRanking('type=WAN TO GO')
  })
  // window.history.pushState({}, '/home?name="POST"', '/home?name="WAN TO GO"');
  button1.classList.add('dim');
  event.preventDefault();
});

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const result = document.getElementById('result');
link1.addEventListener('click', event => {
  // ngăn chặn hành động mặc định của thẻ a
  link1.classList.remove('dim');
  link2.classList.add('dim');
  $(document).ready(function () {
    loadTopRanking(`dateMonth=${d.getMonth()}`)
  })
  link1.classList.add('lim');

});

link2.addEventListener('click', event => {
  link2.classList.remove('dim');
  link2.classList.add('lim');
  $(document).ready(function () {
   
   
    loadTopRanking(`dateYear=${d.getFullYear()}`)
  })


  link1.classList.add('dim');

});
//dropdow
var dropdownBtn = document.querySelectorAll('.drop_btn');
iconDrop = null;
lastOpened = null; //Add this for toggling dropdown

dropdownBtn.forEach(btn => btn.addEventListener('click', function () {
  var dropCont = this.nextElementSibling;
  let icon = this.querySelector('.fa-sharp');
  icon.classList.toggle("down");
  dropCont.classList.toggle("show");

  //Add this for toggling dropdown
  if (lastOpened && lastOpened !== dropCont)
    iconDrop.classList.remove("down");
  iconDrop = icon;

  if (iconDrop && iconDrop !== icon)
    lastOpened.classList.remove("show");
  lastOpened = dropCont;
}));
