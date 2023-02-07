///////////////random images and texts////////////
let getRandomImage_100x300 = () => {
  var images_300x100_top = new Array(
    "img/300x100_top/31_1.gif",
    "img/300x100_top/31_3.gif",
    "img/300x100_top/31_4.gif",
    "img/300x100_top/31_6.gif",
    "img/300x100_top/31_7.gif",
    "img/300x100_top/31_8.gif",
    "img/300x100_top/31_11.gif",
    "img/300x100_top/31_12.gif",
    "img/300x100_top/31_13.gif",
    "img/300x100_top/31_14.gif",
    "img/300x100_top/31_17.gif",
    "img/300x100_top/31_18.gif",
    "img/300x100_top/31_19.gif",
    "img/300x100_top/31_20.gif",
  );
  var images_300x100_middle = new Array(
    "img/300x100_top/31_1.gif",
    "img/300x100_top/31_3.gif",
    "img/300x100_top/31_4.gif",
    "img/300x100_top/31_6.gif",
    "img/300x100_top/31_7.gif",
    "img/300x100_top/31_8.gif",
    "img/300x100_top/31_11.gif",
    "img/300x100_top/31_12.gif",
    "img/300x100_top/31_13.gif",
    "img/300x100_top/31_14.gif",
    "img/300x100_top/31_17.gif",
    "img/300x100_top/31_18.gif",
    "img/300x100_top/31_19.gif",
    "img/300x100_top/31_20.gif",
  );
  var images_300x100_bottom = new Array(
   "img/300x100_top/31_1.gif",
    "img/300x100_top/31_3.gif",
    "img/300x100_top/31_4.gif",
    "img/300x100_top/31_6.gif",
    "img/300x100_top/31_7.gif",
    "img/300x100_top/31_8.gif",
    "img/300x100_top/31_11.gif",
    "img/300x100_top/31_12.gif",
    "img/300x100_top/31_13.gif",
    "img/300x100_top/31_14.gif",
    "img/300x100_top/31_17.gif",
    "img/300x100_top/31_18.gif",
    "img/300x100_top/31_19.gif",
    "img/300x100_top/31_20.gif",
  );

  var randomNum1 = Math.floor(Math.random() * images_300x100_top.length);
  var randomNum2 = Math.floor(Math.random() * images_300x100_middle.length);
  var randomNum3 = Math.floor(Math.random() * images_300x100_bottom.length);

  var img_name_300x100_top = images_300x100_top[randomNum1];
  var img_name_300x100_middle = images_300x100_middle[randomNum2];
  var img_name_300x100_bottom = images_300x100_bottom[randomNum3];

  img_name_300x100_top = img_name_300x100_top.split('/')[2];
  img_name_300x100_middle = img_name_300x100_middle.split('/')[2];
  img_name_300x100_bottom = img_name_300x100_bottom.split('/')[2];

  if (img_name_300x100_top == img_name_300x100_bottom || img_name_300x100_top == img_name_300x100_middle || img_name_300x100_bottom == img_name_300x100_middle) {
    return getRandomImage_100x300();
  }

  document.getElementsByClassName("banner300x100_img")[0].src = images_300x100_top[randomNum1];
  document.getElementsByClassName("banner300x100_img")[1].src = images_300x100_middle[randomNum2];
  document.getElementsByClassName("banner300x100_img")[2].src = images_300x100_bottom[randomNum3];
  //////2th page
  document.getElementsByClassName("banner300x100_img")[3].src = images_300x100_top[randomNum1];
  document.getElementsByClassName("banner300x100_img")[4].src = images_300x100_middle[randomNum2];
  document.getElementsByClassName("banner300x100_img")[5].src = images_300x100_bottom[randomNum3];
  //////3th page
  document.getElementsByClassName("banner300x100_img")[6].src = images_300x100_top[randomNum1];
  document.getElementsByClassName("banner300x100_img")[7].src = images_300x100_middle[randomNum2];
  document.getElementsByClassName("banner300x100_img")[8].src = images_300x100_bottom[randomNum3];
};

let getRandomImage_300x250 = () => {
  var images_300x250 = new Array(
    "img/300x250/32_1.gif",
    "img/300x250/32_2.gif",
    "img/300x250/32_4.gif",
    "img/300x250/32_5.jpeg",
    "img/300x250/32_7.gif",
    "img/300x250/32_8.gif",
    "img/300x250/32_11.gif",
    "img/300x250/32_11.png",
    "img/300x250/32_12.gif",
    "img/300x250/32_13.jpeg",
    "img/300x250/32_15.gif",
    "img/300x250/32_22.gif",
    "img/300x250/32_24.gif",
    "img/300x250/32_25.gif",
    "img/300x250/32_26.gif",
    "img/300x250/32_27.gif",
    "img/300x250/32_28.gif",
  );
  var randomNum4 = Math.floor(Math.random() * images_300x250.length);
  document.getElementsByClassName("banner300x250_img")[0].src = images_300x250[randomNum4];
};

let getRandomtext = () => {
  var random_text = new Array(
    "New (1) Local Contact",
    "New (3) Local Contact",
    "Received (3) Message",
    "Received (1) Nudes",
    "Received (3) Nudes",
    "Fuck Request",
    "New Fuck Requests (7)",
    "New Messages (3)",
    "New FUCK Requests (3)",
    "New FUCK Requests (7)",
    );

  var randomNum3 = Math.floor(Math.random() * random_text.length);
  var text_random_text = (random_text[randomNum3]).toLowerCase();
  $(".titleBryndon").text(text_random_text);
}

getRandomImage_300x250();
getRandomImage_100x300();
getRandomtext();
////////////end////////////

//////////modal baner////////////
var modal = $('.mymodal');
function setModal(display) {
  modal.css('display', display);
  $('body').css("overflow", "hidden");
}

setTimeout(function() {
  setModal('block');  
}, 5000);

$('.banner300x250_img').click(function () {
  setModal('none');
  $('body').css("overflow", "auto");
});

$(modal).click(function (e) {
  var target = e.target;
  if (!($('.content').is(target)) && $('.content').has(target).length === 0) {
    setModal('none');
    $('body').css("overflow", "auto");
  }
});
//////////close modal by buton escape/////////////
$(document).keydown(function (e) {
  if (e.which == 27) {
    setModal('none');
    $('body').css("overflow", "auto");
  }
});
//////////////end/////////////////////


/////////////////////////////redirect link s with parametrs//////////////////////////////
var searchString = new URLSearchParams(window.location.search);
var get_campId = searchString.get('camp_id');
var get_banId = searchString.get('ban_id');
var get_sourceId = searchString.get('source_id');
var get_catId = searchString.get('cat_id');
var get_keyId = searchString.get('key_id');

var campId = get_campId;
var banId = get_banId;
var sourceId = get_sourceId;
var catId = get_catId;
var keyId = get_keyId;

// var openInNewTab = function (link1, link2) {
//   ok = true;
//   window.open(link1, '_blank').focus();
//   window.open(link2, '_self');
// };

var openInNewTab = function (link1) {
  ok = true;
  window.open(link1, '_blank').focus();
};


function redirect_func(className_attr, param) {
  if (className_attr.className == 'banner300x100_img' || className_attr.className == 'banner300x250_img') {
    var img_src = className_attr.src;
    var img_name = img_src.substring(img_src.lastIndexOf('/') + 1);

    var searchString_static = new URLSearchParams(param);
    var get_adFform = searchString_static.get('ad_form');

    var adFform = get_adFform;
    var adId = img_name;

    var link_with_parametr = param.split('?')[0].concat(`?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&ad_form=${adFform}&ad_id=${adId}`);
    var param2 = 'https://test.com/'
    var second_link = param2.split('?')[0].concat(`?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&ad_form=${adFform}&ad_id=${adId}`);
    // openInNewTab(link_with_parametr, second_link);
    openInNewTab(link_with_parametr);
  }
  if (className_attr.className == 'titleBryndon') {
    var text_content = (className_attr.textContent).split(' ').join('');

    var searchString_static = new URLSearchParams(param);

    var get_adFform = searchString_static.get('ad_form');

    var adFform = get_adFform;
    var adId = text_content;

    var link_with_parametr = param.split('?')[0].concat(`?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&ad_form=${adFform}&ad_id=${adId}`);
    var param2 = 'https://test.com/'
    var second_link = param2.split('?')[0].concat(`?camp_id=${campId}&ban_id=${banId}&source_id=${sourceId}&cat_id=${catId}&key_id=${keyId}&ad_form=${adFform}&ad_id=${adId}`);
    // openInNewTab(link_with_parametr, second_link);
    openInNewTab(link_with_parametr);
  }
}
///////////////////////////end//////////////
/////////////////local storage with btn click
$('.open_profilePage').on('click', function () {
  var user_category = $(this).closest(".model_block ").parent().attr('class');
  var user_name = $(this).closest(".model_block ").find(".model_name").text();
  var user_name_count = $(this).closest(".model_block ").children(":first").attr('class');
  var user_accountPhoto = $(this).closest(".model_block ").find('img').get(0).src;
  var click_one = 1;
  //////////////////////
  localStorage.removeItem("user_category");
  localStorage.removeItem("user_name");
  localStorage.removeItem("user_accountPhoto");
  localStorage.removeItem("user_name_count");
  localStorage.removeItem("value_click");
  //////////////////////////for lins parametr user.html///
  localStorage.removeItem("campId");
  localStorage.removeItem("banId");
  localStorage.removeItem("sourceId");
  localStorage.removeItem("catId");
  localStorage.removeItem("keyId");
  ////////////////////////////////////////
  localStorage.clear();
  localStorage.setItem("user_category", user_category);
  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_accountPhoto", user_accountPhoto);
  localStorage.setItem("user_name_count", user_name_count);
  localStorage.setItem("value_click", click_one);
  document.location.href = 'profile.html';

  //////////////////////////for lins parametr user.html///
  localStorage.setItem("campId", campId);
  localStorage.setItem("banId", banId);
  localStorage.setItem("sourceId", sourceId);
  localStorage.setItem("catId", catId);
  localStorage.setItem("keyId", keyId);

  ///////////////////////////////////////////////////////////////////
});
///////////////end//////////////////////////////

//////////burger button//////////////
const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
//////////END burger button//////////////

document.getElementById("year_now").innerHTML = new Date().getFullYear();
