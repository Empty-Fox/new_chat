
///////////////////////////////////////click back in chats/////////////////////////////////   

window.confirm = null;
var campId_user = localStorage.getItem("campId");
var banId_user = localStorage.getItem("banId");
var sourceId_user = localStorage.getItem("sourceId");
var catId_user = localStorage.getItem("catId");
var keyId_user = localStorage.getItem("keyId");

// console.log('campId_user: '+campId_user);
// console.log('banId_user: '+banId_user);
// console.log('sourceId_user: '+sourceId_user);
// console.log('catId_user: '+catId_user);
// console.log('keyId_user: '+keyId_user);


////////////click back with chat///

let ok = false;
$("#id_back").on("click", click_backBTN);
function click_backBTN() {
  ok = true;
  var home_link = '../index.html'
  var home_link_with_parametr = home_link.split('?')[0].concat(`?camp_id=${campId_user}&ban_id=${banId_user}&source_id=${sourceId_user}&cat_id=${catId_user}&key_id=${keyId_user}`);
  window.open(home_link_with_parametr, '_self')
}


/////////validate email///////////

var openInNewTab_email = function () {
  var link = 'https://www.dates4sexx.com/c/2b2bea6186337ae0?camp_id=paste&ban_id=paste&source_id=paste&cat_id=paste&key_id=paste&ad_form=chat&ad_id=paste'
  var searchString_static = new URLSearchParams(link);

  var get_adFform = searchString_static.get('ad_form');
  var user_account = localStorage.getItem("user_account");

  var adFform = get_adFform;
  var adId = user_account;

  var link_with_parametr = link.split('?')[0].concat(`?camp_id=${campId_user}&ban_id=${banId_user}&source_id=${sourceId_user}&cat_id=${catId_user}&key_id=${keyId_user}&ad_form=${adFform}&ad_id=${adId}`);

  var link1 = link_with_parametr;
  var secondLink = 'https://www.dates4sexx.com/c/0d63b920d85e7dce?camp_id=paste&ban_id=paste&source_id=paste&cat_id=paste&key_id=paste&ad_form=paste&ad_id=paste';
  var link2 = secondLink.split('?')[0].concat(`?camp_id=${campId_user}&ban_id=${banId_user}&source_id=${sourceId_user}&cat_id=${catId_user}&key_id=${keyId_user}&ad_form=${adFform}&ad_id=${adId}`);

  ok = true;
  window.open(link1, '_blank').focus();
  window.open(link2, '_self');
};

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text(email + ' is valid');
    $result.css('color', 'green');
    $('#submit').on('click', openInNewTab_email)

  } else {
    $result.text(email + ' is not valid');
    $result.css('color', 'rgb(195 43 43)');
  }
  return false;
}
$('#submit').on('click', validate)
$('#email').on('input', validate);
        /////////END validate email///////////