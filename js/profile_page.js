$.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=8b89ec03c3214360aa2696a3cad1e0f7&ip=", (function (data) {
  JSON.stringify(data, null, 2),
    region = data.city;
  $(".city_name").text(region);
}
));

// ................................
var user_category = localStorage.getItem("user_category");
var user_name_ = localStorage.getItem("user_name");
var user_accountPhoto_ = localStorage.getItem("user_accountPhoto");
var user_name_count_ = localStorage.getItem("user_name_count");
var click_two = localStorage.getItem("value_click");

// console.log('user_category: ' + user_category);
// console.log('user_name: ' + user_name_);
// console.log('user_accountPhoto: ' + user_accountPhoto_);
// console.log('user_name_count: ' + user_name_count_);
// console.log('value_click: ' + click_two);


$('.name_girl').text(user_name_);
$(".user_photo_profile").attr("src", user_accountPhoto_);
$(".name_girl").addClass(user_name_count_);
// ..............data objects//////////
var teens = {
  teens_model1: {
    photos: ['img/teens/teens_model1/profile_1.jpg', 'img/teens/teens_model1/profile_2.jpg', 'img/teens/teens_model1/profile_3.jpg', 'img/teens/teens_model1/profile_4.jpg'],
    age: [23],
    status: ['Looking for Sex'],
    details: ['Shy girl, too shy to say anything. I better show you!']
  },
  teens_model2: {
    photos: ['img/teens/teens_model2/profile_1.jpg', 'img/teens/teens_model2/profile_2.jpg', 'img/teens/teens_model2/profile_3.jpg', 'img/teens/teens_model2/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['Just close your eyes and imagine all the things I`m about to do for you.']
  },
  teens_model3: {
    photos: ['img/teens/teens_model3/profile_1.jpg', 'img/teens/teens_model3/profile_2.jpg', 'img/teens/teens_model3/profile_3.jpg', 'img/teens/teens_model3/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['Sweet, elegant, I love life in all its manifestations.']
  },
  teens_model4: {
    photos: ['img/teens/teens_model4/profile_1.jpg', 'img/teens/teens_model4/profile_2.jpg', 'img/teens/teens_model4/profile_3.jpg', 'img/teens/teens_model4/profile_4.jpg'],
    age: [29],
    status: ['Looking for Sex'],
    details: ['Hot passionate sweet and tender brunette.']
  },
  teens_model5: {
    photos: ['img/teens/teens_model5/profile_1.jpg', 'img/teens/teens_model5/profile_2.jpg', 'img/teens/teens_model5/profile_3.jpg', 'img/teens/teens_model5/profile_4.jpg'],
    age: [23],
    status: ['Looking for Sex'],
    details: ['I`m not looking for a relationship. I get excited when people look at me'],
  },
  teens_model6: {
    photos: ['img/teens/teens_model6/profile_1.jpg', 'img/teens/teens_model6/profile_2.jpg', 'img/teens/teens_model6/profile_3.jpg', 'img/teens/teens_model6/profile_4.jpg'],
    age: [24],
    status: ['Looking for Sex'],
    details: ['Hi! I love to seduce and make you feel good..']
  },
  teens_model7: {
    photos: ['img/teens/teens_model7/profile_1.jpg', 'img/teens/teens_model7/profile_2.jpg', 'img/teens/teens_model7/profile_3.jpg', 'img/teens/teens_model7/profile_4.jpg'],
    age: [22],
    status: ['Looking for Sex'],
    details: ['Sexy girl with hot body ready to try new sexy games']
  },
  teens_model8: {
    photos: ['img/teens/teens_model8/profile_1.jpg', 'img/teens/teens_model8/profile_2.jpg', 'img/teens/teens_model8/profile_3.jpg', 'img/teens/teens_model8/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['I am freakin sexy and you will get anything you want and even more']
  },
  teens_model9: {
    photos: ['img/teens/teens_model9/profile_1.jpg', 'img/teens/teens_model9/profile_2.jpg', 'img/teens/teens_model9/profile_3.jpg', 'img/teens/teens_model9/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['Blonde, outgoing positive, can be bitchy or a sweet little girl. It is interesting to communicate with men who know why they came.']
  },
  teens_model10: {
    photos: ['img/teens/teens_model10/profile_1.jpg', 'img/teens/teens_model10/profile_2.jpg', 'img/teens/teens_model10/profile_3.jpg', 'img/teens/teens_model10/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['Smart, sociable and hot. Love to be here! Join me 💋💋💋']
  },
  teens_model11: {
    photos: ['img/teens/teens_model11/profile_1.jpg', 'img/teens/teens_model11/profile_2.jpg', 'img/teens/teens_model11/profile_3.jpg', 'img/teens/teens_model11/profile_4.jpg'],
    age: [21],
    status: ['Looking for Sex'],
    details: ['You`ll like it when you get to know me better..']
  },
  teens_model12: {
    photos: ['img/teens/teens_model12/profile_1.jpg', 'img/teens/teens_model12/profile_2.jpg', 'img/teens/teens_model12/profile_3.jpg', 'img/teens/teens_model12/profile_4.jpg'],
    age: [22],
    status: ['Looking for Sex'],
    details: ['Young and sociable, show interest and we will become good friends']
  }
};
var singles = {
  singles_model1: {
    photos: ['img/singles/singles_model1/profile_1.jpg', 'img/singles/singles_model1/profile_2.jpg', 'img/singles/singles_model1/profile_3.jpg', 'img/singles/singles_model1/profile_4.jpg'],
    age: [33],
    status: ['Looking for Sex'],
    details: ['Hello, dear 😋 I am Venessa, glad to see you on my profile, now we will have fun together 😈 I have a nice body and like massage from strong hands(and cocks😈) I`m waiting you in chat.']
  },
  singles_model2: {
    photos: ['img/singles/singles_model2/profile_1.jpg', 'img/singles/singles_model2/profile_2.jpg', 'img/singles/singles_model2/profile_3.jpg', 'img/singles/singles_model2/profile_4.jpg'],
    age: [28],
    status: ['Looking for Sex'],
    details: ['I am sweet and magical beauty, do u wanna check it?']
  },
  singles_model3: {
    photos: ['img/singles/singles_model3/profile_1.jpg', 'img/singles/singles_model3/profile_2.jpg', 'img/singles/singles_model3/profile_3.jpg', 'img/singles/singles_model3/profile_4.jpg'],
    age: [26],
    status: ['Looking for Sex'],
    details: ['Kind, friendly, cute, and horny... love to chat with interesting men']
  },
  singles_model4: {
    photos: ['img/singles/singles_model4/profile_1.jpg', 'img/singles/singles_model4/profile_2.jpg', 'img/singles/singles_model4/profile_3.jpg', 'img/singles/singles_model4/profile_4.jpg'],
    age: [30],
    status: ['Looking for Sex'],
    details: ['Hey! My name is Suzy, I like to look bright and have fun, I can support any topic of conversation and dispel your boredom. I like to listen to music and dance seductively to it. I invite you to spend your leisure time with me, because I will not let you be dissatisfied! with luv']
  },
  singles_model5: {
    photos: ['img/singles/singles_model5/profile_1.jpg', 'img/singles/singles_model5/profile_2.jpg', 'img/singles/singles_model5/profile_3.jpg', 'img/singles/singles_model5/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['nymphet with a smooth body and a baby face']
  },
  singles_model6: {
    photos: ['img/singles/singles_model6/profile_1.jpg', 'img/singles/singles_model6/profile_2.jpg', 'img/singles/singles_model6/profile_3.jpg', 'img/singles/singles_model6/profile_4.jpg'],
    age: [23],
    status: ['Looking for Sex'],
    details: ['Hello. I would like to get to know you better. I am here to receive and give pleasure. Let`s just chat!)']
  },
  singles_model7: {
    photos: ['img/singles/singles_model7/profile_1.jpg', 'img/singles/singles_model7/profile_2.jpg', 'img/singles/singles_model7/profile_3.jpg', 'img/singles/singles_model7/profile_4.jpg'],
    age: [28],
    status: ['Looking for Sex'],
    details: ['I`m friendly blonde girl, love talking with u guys, listen music and dance ^_^']
  },
  singles_model8: {
    photos: ['img/singles/singles_model8/profile_1.jpg', 'img/singles/singles_model8/profile_2.jpg', 'img/singles/singles_model8/profile_3.jpg', 'img/singles/singles_model8/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['You won`t find a better companion! Do you know smth about sex-maraphone? Because I like this "sport"😛']
  },
  singles_model9: {
    photos: ['img/singles/singles_model9/profile_1.jpg', 'img/singles/singles_model9/profile_2.jpg', 'img/singles/singles_model9/profile_3.jpg', 'img/singles/singles_model9/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['My attention can be attracted by beautiful actions, not words: compliments, orgasms..']
  },
  singles_model10: {
    photos: ['img/singles/singles_model10/profile_1.jpg', 'img/singles/singles_model10/profile_2.jpg', 'img/singles/singles_model10/profile_3.jpg', 'img/singles/singles_model10/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['Although I am a kitty I can bite. I professionally sit on the face. Do u wanna working with your tongue??😛']
  },
  singles_model11: {
    photos: ['img/singles/singles_model11/profile_1.jpg', 'img/singles/singles_model11/profile_2.jpg', 'img/singles/singles_model11/profile_3.jpg', 'img/singles/singles_model11/profile_4.jpg'],
    age: [33],
    status: ['Looking for Sex'],
    details: ['I`m a girl who enjoy a good talk also a good cock.']
  },
  singles_model12: {
    photos: ['img/singles/singles_model12/profile_1.jpg', 'img/singles/singles_model12/profile_2.jpg', 'img/singles/singles_model12/profile_3.jpg', 'img/singles/singles_model12/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['I love communication and not only. I really enjoy sex. I love nature, travel and just live in a buzz.']
  }
};
var milf = {
  milf_model1: {
    photos: ['img/milf/milf_model1/profile_1.jpg', 'img/milf/milf_model1/profile_2.jpg', 'img/milf/milf_model1/profile_3.jpg', 'img/milf/milf_model1/profile_4.jpg'],
    age: [42],
    status: ['Looking for Sex'],
    details: ['Hi. Im Amanda. I hope we have a great time together! I know a lot of interesting❤️']
  },
  milf_model2: {
    photos: ['img/milf/milf_model2/profile_1.jpg', 'img/milf/milf_model2/profile_2.jpg', 'img/milf/milf_model2/profile_3.jpg', 'img/milf/milf_model2/profile_4.jpg'],
    age: [34],
    status: ['Looking for Sex'],
    details: ['Very gentle and sensitive girl. Would meet a nice guy with same preferences.']
  },
  milf_model3: {
    photos: ['img/milf/milf_model3/profile_1.jpg', 'img/milf/milf_model3/profile_2.jpg', 'img/milf/milf_model3/profile_3.jpg', 'img/milf/milf_model3/profile_4.jpg'],
    age: [35],
    status: ['Looking for Sex'],
    details: ['The girl with the firm ass, big boobs, sharp tongue and dirty fantasy.']
  },
  milf_model4: {
    photos: ['img/milf/milf_model4/profile_1.jpg', 'img/milf/milf_model4/profile_2.jpg', 'img/milf/milf_model4/profile_3.jpg', 'img/milf/milf_model4/profile_4.jpg'],
    age: [39],
    status: ['Looking for Sex'],
    details: ['Hello, my name is Sara, I am looking for very hot experiences that make me explode with pleasure, I can be as hot as fire.']
  },
  milf_model5: {
    photos: ['img/milf/milf_model5/profile_1.jpg', 'img/milf/milf_model5/profile_2.jpg', 'img/milf/milf_model5/profile_3.jpg', 'img/milf/milf_model5/profile_4.jpg'],
    age: [35],
    status: ['Looking for Sex'],
    details: ['Hello! In my free time I like to read books, manga, and stroking the pussy..  ']
  },
  milf_model6: {
    photos: ['img/milf/milf_model6/profile_1.jpg', 'img/milf/milf_model6/profile_2.jpg', 'img/milf/milf_model6/profile_3.jpg', 'img/milf/milf_model6/profile_4.jpg'],
    age: [37],
    status: ['Looking for Sex'],
    details: ['Charming natural blonde, with a sense of humour. Attentive and smart. ']
  },
  milf_model7: {
    photos: ['img/milf/milf_model7/profile_1.jpg', 'img/milf/milf_model7/profile_2.jpg', 'img/milf/milf_model7/profile_3.jpg', 'img/milf/milf_model7/profile_4.jpg'],
    age: [43],
    status: ['Looking for Sex'],
    details: ['Hey honey! Have you tried boobs like mine? I want to put your cock inside❤️']
  },
  milf_model8: {
    photos: ['img/milf/milf_model8/profile_1.jpg', 'img/milf/milf_model8/profile_2.jpg', 'img/milf/milf_model8/profile_3.jpg', 'img/milf/milf_model8/profile_4.jpg'],
    age: [41],
    status: ['Looking for Sex'],
    details: ['What difference does it make what I write here? It could still be a lie. But I`ll tell you one truth.. Every night I`m so horny..']
  },
  milf_model9: {
    photos: ['img/milf/milf_model9/profile_1.jpg', 'img/milf/milf_model9/profile_2.jpg', 'img/milf/milf_model9/profile_3.jpg', 'img/milf/milf_model9/profile_4.jpg'],
    age: [36],
    status: ['Looking for Sex'],
    details: ['Hi, I am sweet and positive milf with very sensitive body. My pussy is so tight💋']
  },
  milf_model10: {
    photos: ['img/milf/milf_model10/profile_1.jpg', 'img/milf/milf_model10/profile_2.jpg', 'img/milf/milf_model10/profile_3.jpg', 'img/milf/milf_model10/profile_4.jpg'],
    age: [32],
    status: ['Looking for Sex'],
    details: ['Hot brunette with nice boobs. Do you like it?😘']
  },
  milf_model11: {
    photos: ['img/milf/milf_model11/profile_1.jpg', 'img/milf/milf_model11/profile_2.jpg', 'img/milf/milf_model11/profile_3.jpg', 'img/milf/milf_model11/profile_4.jpg'],
    age: [43],
    status: ['Looking for Sex'],
    details: ['Hi! I really enjoy nature, coffee, traveling. I love my pets a pinscher and a Yorkshire Terrier. I enjoy my time online. I love chatting with nice people here.']
  },
  milf_model12: {
    photos: ['img/milf/milf_model12/profile_1.jpg', 'img/milf/milf_model12/profile_2.jpg', 'img/milf/milf_model12/profile_3.jpg', 'img/milf/milf_model12/profile_4.jpg'],
    age: [39],
    status: ['Looking for Sex'],
    details: ['My attention can be attracted by beautiful actions, not words: compliments, orgasms...']
  }
};
var babes = {
  babes_model1: {
    photos: ['img/babes/babes_model1/profile_1.jpg', 'img/babes/babes_model1/profile_2.jpg', 'img/babes/babes_model1/profile_3.jpg', 'img/babes/babes_model1/profile_4.jpg'],
    age: [22],
    status: ['Looking for Sex'],
    details: ['I am sweet and magical beauty']
  },
  babes_model2: {
    photos: ['img/babes/babes_model2/profile_1.jpg', 'img/babes/babes_model2/profile_2.jpg', 'img/babes/babes_model2/profile_3.jpg', 'img/babes/babes_model2/profile_4.jpg'],
    age: [24],
    status: ['Looking for Sex'],
    details: ['hello) I appreciate the sense of humor and goodwill, I am very cheerful and sociable.']
  },
  babes_model3: {
    photos: ['img/babes/babes_model3/profile_1.jpg', 'img/babes/babes_model3/profile_2.jpg', 'img/babes/babes_model3/profile_3.jpg', 'img/babes/babes_model3/profile_4.jpg'],
    age: [29],
    status: ['Looking for Sex'],
    details: ['I am a latina girl who wants to have new adventures and enjoy my sexuality.']
  },
  babes_model4: {
    photos: ['img/babes/babes_model4/profile_1.jpg', 'img/babes/babes_model4/profile_2.jpg', 'img/babes/babes_model4/profile_3.jpg', 'img/babes/babes_model4/profile_4.jpg'],
    age: [24],
    status: ['Looking for Sex'],
    details: ['Hey-hey!! Very gentle and sensitive girl. Would meet a nice guy with same preferences. Sometimes I like practic anal with my tight ass😋']
  },
  babes_model5: {
    photos: ['img/babes/babes_model5/profile_1.jpg', 'img/babes/babes_model5/profile_2.jpg', 'img/babes/babes_model5/profile_3.jpg', 'img/babes/babes_model5/profile_4.jpg'],
    age: [23],
    status: ['Looking for Sex'],
    details: ['I am dirty blonde, that loves to fuck, and am extremely horny. Do u wanna check it??']
  },
  babes_model6: {
    photos: ['img/babes/babes_model6/profile_1.jpg', 'img/babes/babes_model6/profile_2.jpg', 'img/babes/babes_model6/profile_3.jpg', 'img/babes/babes_model6/profile_4.jpg'],
    age: [21],
    status: ['Looking for Sex'],
    details: ['I am unique and everyone likes me. Just write me ❤️']
  },
  babes_model7: {
    photos: ['img/babes/babes_model7/profile_1.jpg', 'img/babes/babes_model7/profile_2.jpg', 'img/babes/babes_model7/profile_3.jpg', 'img/babes/babes_model7/profile_4.jpg'],
    age: [23],
    status: ['Looking for Sex'],
    details: ['I`m friendly blonde girl, love talking with u guys, listen music and dance ^_^']
  },
  babes_model8: {
    photos: ['img/babes/babes_model8/profile_1.jpg', 'img/babes/babes_model8/profile_2.jpg', 'img/babes/babes_model8/profile_3.jpg', 'img/babes/babes_model8/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['Brunette, outgoing positive, can be bitchy or a sweet little girl. It is interesting to communicate with men who know why they came😋']
  },
  babes_model9: {
    photos: ['img/babes/babes_model9/profile_1.jpg', 'img/babes/babes_model9/profile_2.jpg', 'img/babes/babes_model9/profile_3.jpg', 'img/babes/babes_model9/profile_4.jpg'],
    age: [25],
    status: ['Looking for Sex'],
    details: ['You`ll like it when you get to know me better..']
  },
  babes_model10: {
    photos: ['img/babes/babes_model10/profile_1.jpg', 'img/babes/babes_model10/profile_2.jpg', 'img/babes/babes_model10/profile_3.jpg', 'img/babes/babes_model10/profile_4.jpg'],
    age: [28],
    status: ['Looking for Sex'],
    details: ['Sexy girl with hot body ready to try new sexy games..Tight pussy and hot ass wait you❤️']
  },
  babes_model11: {
    photos: ['img/babes/babes_model11/profile_1.jpg', 'img/babes/babes_model11/profile_2.jpg', 'img/babes/babes_model11/profile_3.jpg', 'img/babes/babes_model11/profile_4.jpg'],
    age: [24],
    status: ['Looking for Sex'],
    details: ['Hi! I like doing new things that bring emotions and experiencies.  Im into fitness too, a healty body is a healthy mind.']
  },
  babes_model12: {
    photos: ['img/babes/babes_model12/profile_1.jpg', 'img/babes/babes_model12/profile_2.jpg', 'img/babes/babes_model12/profile_3.jpg', 'img/babes/babes_model12/profile_4.jpg'],
    age: [27],
    status: ['Looking for Sex'],
    details: ['Hot black girl with the firm ass, sharp tongue and dirty fantasy.']
  }
};

var model_class = $(".name_girl").attr('class').split(/\s+/);
var info_model = model_class[1];


if (user_category == 'teens_block') {
  $(".modal-hover-opacity").each(function (index) {
    $(this).attr("src", teens[info_model].photos[index]);
  });
  $(".modal-hover-opacity_big").each(function (index) {
    $(this).attr("src", teens[info_model].photos[index]);
  });
  $(".age").text(teens[info_model].age);
  $(".status").text(teens[info_model].status);
  $(".details").text(teens[info_model].details);
}
else if (user_category == 'singles_block') {
  $(".modal-hover-opacity").each(function (index) {
    $(this).attr("src", singles[info_model].photos[index]);
  });
  $(".modal-hover-opacity_big").each(function (index) {
    $(this).attr("src", singles[info_model].photos[index]);
  });

  $(".city_name").text(singles[info_model].city);
  $(".age").text(singles[info_model].age);
  $(".status").text(singles[info_model].status);
  $(".details").text(singles[info_model].details);
}
else if (user_category == 'milf_block') {
  $(".modal-hover-opacity").each(function (index) {
    $(this).attr("src", milf[info_model].photos[index]);
  });
  $(".modal-hover-opacity_big").each(function (index) {
    $(this).attr("src", milf[info_model].photos[index]);
  });
  $(".city_name").text(milf[info_model].city);
  $(".age").text(milf[info_model].age);
  $(".status").text(milf[info_model].status);
  $(".details").text(milf[info_model].details);
}
else if (user_category == 'babes_block') {
  $(".modal-hover-opacity").each(function (index) {
    $(this).attr("src", babes[info_model].photos[index]);
  });
  $(".modal-hover-opacity_big").each(function (index) {
    $(this).attr("src", babes[info_model].photos[index]);
  });
  $(".city_name").text(babes[info_model].city);
  $(".age").text(babes[info_model].age);
  $(".status").text(babes[info_model].status);
  $(".details").text(babes[info_model].details);
}
// ...................

// .............END teens objects//////////

/////////////////local storage with btn click
$('.open_chat').on('click', function () {
  var user_name = $(this).closest(".main_block").find(".name_girl").text();
  var user_name_count = $(this).closest(".main_block ").find(".name_girl").attr('class');
  var user_accountPhoto = $(this).closest(".main_block ").children().eq(1).find('img').get(0).src;
  var user_account = $(this).closest(".main_block").find(".name_girl").text();
  var click_one = 1;
  //////////////////////

  localStorage.setItem("user_name", user_name);
  localStorage.setItem("user_accountPhoto", user_accountPhoto);
  localStorage.setItem("user_name_count", user_name_count);
  localStorage.setItem("value_click", click_one);
  localStorage.setItem("user_account", user_account);
  document.location.href = 'profile_chat/chat.html';


  ///////////////////////////////////////////////////////////////////
});
///////////////end//////////////////////////////


///////////////random images and texts////////////
let getRandomImage_100x300 = () => {
  var images_300x100_modal_profile = new Array(
    "img/300x100_profile/31_1.gif",
    "img/300x100_profile/31_3.gif",
    "img/300x100_profile/31_4.gif",
    "img/300x100_profile/31_6.gif",
    "img/300x100_profile/31_7.gif",
    "img/300x100_profile/31_8.gif",
    "img/300x100_profile/31_11.gif",
    "img/300x100_profile/31_12.gif",
    "img/300x100_profile/31_13.gif",
    "img/300x100_profile/31_14.gif",
    "img/300x100_profile/31_17.gif",
    "img/300x100_profile/31_18.gif",
    "img/300x100_profile/31_19.gif",
    "img/300x100_profile/31_20.gif",
  );

  var randomNum1 = Math.floor(Math.random() * images_300x100_modal_profile.length);
  var img_name_300x100_modal_profile = images_300x100_modal_profile[randomNum1];
  img_name_300x100_modal_profile = img_name_300x100_modal_profile.split('/')[2];
  $(".banner300x100_img:eq( 0 )").attr("src", images_300x100_modal_profile[randomNum1]);
}
getRandomImage_100x300();
var campId_pp = localStorage.getItem("campId");
var banId_pp = localStorage.getItem("banId");
var sourceId_pp = localStorage.getItem("sourceId");
var catId_pp = localStorage.getItem("catId");
var keyId_pp = localStorage.getItem("keyId");

// console.log('campId_pp: '+campId_pp);
// console.log('banId_pp: '+banId_pp);
// console.log('sourceId_pp: '+sourceId_pp);
// console.log('catId_pp: '+catId_pp);
// console.log('keyId_pp: '+keyId_pp);

var openInNewTab = function (link1) {
  ok = true;
  window.open(link1, '_blank').focus();
};


function redirect_func(className_attr, param) {
  //////////////////////////for lins parametr user.html///
  if (className_attr.className == 'banner300x100_img') {
    var img_src = className_attr.src;
    var img_name = img_src.substring(img_src.lastIndexOf('/') + 1);

    var searchString_static = new URLSearchParams(param);
    var get_adFform = searchString_static.get('ad_form');

    var adFform = get_adFform;
    var adId = img_name;

    var link_with_parametr = param.split('?')[0].concat(`?camp_id=${campId_pp}&ban_id=${banId_pp}&source_id=${sourceId_pp}&cat_id=${catId_pp}&key_id=${keyId_pp}&ad_form=${adFform}&ad_id=${adId}`);
    var param2 = 'https://test.com/';
    console.log(link_with_parametr)
    var second_link = param2.split('?')[0].concat(`?camp_id=${campId_pp}&ban_id=${banId_pp}&source_id=${sourceId_pp}&cat_id=${catId_pp}&key_id=${keyId_pp}&ad_form=${adFform}&ad_id=${adId}`);
    // openInNewTab(link_with_parametr, second_link);
    openInNewTab(link_with_parametr);
  }
}

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