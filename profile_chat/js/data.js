document.getElementById("year_now").innerHTML = new Date().getFullYear();
//////////////////time in message minutes with 0 /////////////////
function minutes_with_leading_zeros(today) {
  return (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
}
// ............висота для моб щоб 100vh була: .............
(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
// ...........................................

window.onbeforeunload = function () {
  var html = $('#container1')[0].outerHTML;
  localStorage.removeItem("htmltest");
  localStorage.setItem('htmltest', html);

  return;
}

//////////////for local storage save chat ios (android)
var timeout;
$(window).on('pagehide', function (e) {
  var html = $('#container1')[0].outerHTML;
  localStorage.removeItem("htmltest");
  localStorage.setItem('htmltest', html);
  e.preventDefault();
  return;
});
window.unload = function () {
  var html = $('#container1')[0].outerHTML;
  localStorage.removeItem("htmltest");
  localStorage.setItem('htmltest', html);
  clearTimeout(timeout);
  return;
};
//////////////END ////////////////////////////////////////////////

// ................................
var user_name_ = localStorage.getItem("user_name");
var user_accountPhoto_ = localStorage.getItem("user_accountPhoto");
var user_name_count_ = localStorage.getItem("user_name_count");
var click_two = localStorage.getItem("value_click");
var user_account = localStorage.getItem("user_account");

var click_one_one = localStorage.getItem("click_one_one");

if (click_two == 1) {
  $('.userName_val').text(user_name_);
  $(".user_accountPhoto").attr("src", user_accountPhoto_);
  $(".userName_val").addClass(user_name_count_);

  // console.log('user_name_: '+user_name_);
  // console.log('user_accountPhoto_: '+user_accountPhoto_);
  // console.log('user_name_count_: '+user_name_count_);
  // console.log('value_click: '+click_two);
  // console.log('--- click_one_one: '+click_one_one);
  // console.log('user_account: '+user_account);
  // console.log(localStorage.getItem('htmltest'));


} else { }


//////text chat for category teens////////
if ($("#chat-title").find(".name_girl").hasClass('teens_model1')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model1.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model2')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model2.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model3')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model3.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model4')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model4.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model5')) {
  var botMessage = [["Hey 💋💋💋   I have something hot for you", "Do you wanna see my nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model5.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model6')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/teens/chat_model6.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model7')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model7.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model8')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model8.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model9')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model9.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model10')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model10.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model111')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model11.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('teens_model12')) {
  var botMessage = [["Hi 💋💋💋   I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/teens/chat_model12.jpg"]
}

//////text chat for category singles////////
if ($("#chat-title").find(".name_girl").hasClass('singles_model1')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model1.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model2')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model2.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model3')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model3.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model4')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model4.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model5')) {
  var botMessage = [["Hey 💋💋💋   I have something hot for you", "Do you wanna see my nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/singles/chat_model5.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model6')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model6.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model7')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model7.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model8')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model8.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model9')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model9.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model10')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model10.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model11')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model11.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('singles_model12')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/singles/chat_model12.jpg"]
}

//////text chat for category milf////////
if ($("#chat-title").find(".name_girl").hasClass('milf_model1')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model1.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model2')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model2.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model3')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model3.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model4')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model4.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model5')) {
  var botMessage = [["Hey 💋💋💋   I have something hot for you", "Do you wanna see my nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model5.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model6')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/milf/chat_model6.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model7')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model7.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model8')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model8.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model9')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model9.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model10')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model10.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model11')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model11.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('milf_model12')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/milf/chat_model12.jpg"]
}


//////text chat for category babes////////
if ($("#chat-title").find(".name_girl").hasClass('babes_model1')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model1.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model2')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model2.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model3')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model3.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model4')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model4.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model5')) {
  var botMessage = [["Hey 💋💋💋   I have something hot for you", "Do you wanna see my nudes?",
    "Just wait a few seconds . . . I'll send you of my ..🍒",
    "Like it ?"]];
  var photoUser1 = ["images/babes/chat_model5.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model6')) {
  var botMessage = [["Hey hey ❤ are you looking for babe here?", "I have a small gift for you 😘",
    "Just wait a few seconds . . . ",
    "What  do u think?"]];
  var photoUser1 = ["images/babes/chat_model6.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model7')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model7.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model8')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model8.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model9')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model9.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model10')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model10.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model11')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model11.jpg"]
}
if ($("#chat-title").find(".name_girl").hasClass('babes_model12')) {
  var botMessage = [["Hey hey 😘 Do you like young body?", "My sweet pussy wanna you. She`s ..so wet",
    "Let me show you smth. . . veryy hot 🔥",
    "What do you think ?"]];
  var photoUser1 = ["images/babes/chat_model12.jpg"]
}

url_image = '';
var today = new Date();
var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
var counter = 0, timer = null, I, timer_v = 3000;
var local_count = 0;


if (localStorage.getItem("click_one_one") == null) {
  bot_message();

}
if (localStorage.getItem("click_one_one") == 0) {
  $("#container1").replaceWith(localStorage.getItem('htmltest'));
  timer_bot1();

}
if (localStorage.getItem("click_one_one") == 1) {
  $("#container1").replaceWith(localStorage.getItem('htmltest'));
  timer_bot2();

}
if (localStorage.getItem("click_one_one") == 2) {
  $("#container1").replaceWith(localStorage.getItem('htmltest'));
  timer_bot3();

}
if (localStorage.getItem("click_one_one") == 3) {
  $("#container1").replaceWith(localStorage.getItem('htmltest'));
  timer_bot4();

}
if (localStorage.getItem("click_one_one") == 4) {
  $("#container1").replaceWith(localStorage.getItem('htmltest'));
  document.getElementById("opacityBlock").style.display = 'block';
  document.querySelectorAll(".stylick").forEach(a => a.style.display = "block");
  $('input').blur();
  clearInterval(I);
  timer_v = null;
  $(document).mouseup(function (e) {
    var container = $(".stylick");
    if (container.has(e.target).length === 0) {
      container.hide();
      $("#opacityBlock").hide();
      $('body').css("overflow", "auto");
    }
  });
  $('#id').click(function () {
    enterMessage = null;
    $(".stylick").show();
    $("#opacityBlock").show();

  });
}

function bot_message() {
  setTimeout(function () {
    addMessageBot_first(["message-row", "other-message"], botMessage);
    var click_one_one = 0;
    localStorage.removeItem("click_one_one")
    localStorage.setItem("click_one_one", click_one_one);
    if (localStorage.getItem("click_one_one") == 0) {
      timer_bot1();
    }
  }, 3000);
}
function timer_bot1() {
  setTimeout(function () {
    addMessageBot1(["message-row", "other-message"], botMessage);
    var click_one_one = 1;
    localStorage.removeItem("click_one_one")
    localStorage.setItem("click_one_one", click_one_one);
    if (localStorage.getItem("click_one_one") == 1) {
      timer_bot2();
    }
  }, 6000);

}
function timer_bot2() {
  setTimeout(function () {
    addMessageBot2(["message-row", "other-message"], botMessage);
    var click_one_one = 2;
    localStorage.removeItem("click_one_one")
    localStorage.setItem("click_one_one", click_one_one);
    if (localStorage.getItem("click_one_one") == 2) {
      timer_bot3();
    }
  }, 8000);
}
function timer_bot3() {
  setTimeout(function () {
    addMessageBotTimer1(["message-row", "other-message"], photoUser1);
    var click_one_one = 3;
    localStorage.removeItem("click_one_one")
    localStorage.setItem("click_one_one", click_one_one);
    if (localStorage.getItem("click_one_one") == 3) {
      timer_bot4();
    }
  }, 8000);
}
function timer_bot4() {
  setTimeout(function () {
    addMessageBot3(["message-row", "other-message"], botMessage);
    var click_one_one = 4;
    localStorage.removeItem("click_one_one")
    localStorage.setItem("click_one_one", click_one_one);
  }, 10000);

}
function enterMessage() {
  counter = 0;
  var yourMessage = document.getElementById("myTextField").value;
  null == yourMessage || "" == yourMessage || (addMessage(["message-row", "you-message"], yourMessage),
    document.getElementById("myTextField").value = "");
}

$(document).on('click', '#id', function () {
  enterMessage();
})

var clicks1 = 0, bclicks1 = 0;
var bclicks2 = 0;

function addMessageBot_first(classList, message) {
  var timeTyping = Math.floor(2e3 * Math.random()) + 1e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_girl"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks2 += 1;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";

    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][0];
      messageText_p2.innerText = time;
    }
    ), timeTyping);
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}
function addMessageBot1(classList, message) {
  var timeTyping = Math.floor(4e3 * Math.random()) + 3e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_girl"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks1 = 1;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";
    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][bclicks1];
      messageText_p2.innerText = time;
      if (bclicks1 == 2) {
        clearInterval(I);
        setTimeout(function () {
          addMessageBotTimer1(["message-row", "other-message"], photoUser1);
        }, 4000)
      }
    }
    ), timeTyping);
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}
function addMessageBot2(classList, message) {
  var timeTyping = Math.floor(4e3 * Math.random()) + 3e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_girl"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks1 = 2;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";

    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][bclicks1];
      messageText_p2.innerText = time;
    }
    ), timeTyping);
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}
function addMessageBot3(classList, message) {
  var timeTyping = Math.floor(4e3 * Math.random()) + 3e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_girl"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks1 = 3;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";

    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][bclicks1];
      messageText_p2.innerText = time;

      if (bclicks1 == 3) {
        document.getElementById("opacityBlock").style.display = 'block';
        document.querySelectorAll(".stylick").forEach(a => a.style.display = "block");
        $('body').css("overflow", "hidden");
        $('input').blur();
        clearInterval(I);
        timer = null;

        $(document).mouseup(function (e) {
          var container = $(".stylick");
          if (container.has(e.target).length === 0) {
            container.hide();
            $("#opacityBlock").hide();
            $('body').css("overflow", "auto");
          }
        });
        $('#id').click(function () {
          enterMessage = null;
          $(".stylick").show();
          $("#opacityBlock").show();

        });
      }
    }
    ), timeTyping);
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}

function addMessage(classList, message) {
  var messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div");
  messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_you"),
    messageText.classList.add("message-text"),
    messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");
  messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),
    messageText_p1.innerText = message,
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageText),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage)
  var today = new Date();
  var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
  messageText_p2.innerText = time;
  (document.getElementById("container1").appendChild(messageRow))

  messageImage.classList.add("message_content_photo2"),
    messageImage.src = "images/user_icon.png"
}

function addMessageBotTimer1(classList, message) {
  var messageRow = document.createElement("div");
  messageRow.classList.add(...classList);
  var messageContent = document.createElement("div")
    , messageContent_border = document.createElement("div")
  messageContent.classList.add("message-content"),
    messageContent_border.classList.add("border_user_girl"),
    messageRow.appendChild(messageContent);
  var messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageImageText = document.createElement("img")
    , text = document.createElement("div")
    , messageText_p2 = document.createElement("p");
  messageText.classList.add("message-text"),
    messageContent.appendChild(messageContent_border),
    messageContent_border.appendChild(messageImage),
    messageContent.append(messageText),
    messageImageText.classList.add("message-text_img"),
    messageText.appendChild(text),
    messageText.appendChild(messageImageText),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2");
  var i = 0
    , str1 = message[0][i];
  str1.length > 13 && (str1 = str1.substring(0, 10) + "..."),
    clicks1 += 1;
  var today = new Date();
  var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
  document.getElementById("container1").appendChild(messageRow),
    text.innerText = "typing....",
    setTimeout((function () {
      text.innerText = "",
        messageImageText.classList.add("message-text_img"),
        messageImageText.src = photoUser1[0],
        messageText_p2.innerText = time;
    }
    ), 1e3);
  var picture = document.images[0].src;
  messageImage.classList.add("message_content_photo1"),
    messageImage.src = picture
}
$(".enter_mes").on("keyup", (function (e) {
  13 == e.which && $("#id").click()
}
));