var H = [
  "querySelectorAll",
  "<br><br>\x20<b>\x20Answer\x205</b><br>",
  "name",
  "https://unit-test-b8dab.firebaseio.com",
  "<br><hr>",
  "unit-test-b8dab",
  "rollNumber",
  "val",
  "answerList",
  "<br><br>",
  "G-10FT1MWQSX",
  "unit-test-b8dab.appspot.com",
  "question6a",
  "createElement",
  "log",
  "question4",
  "question1",
  "subject",
  "appendChild",
  "question7b",
  "ref",
  "<br><br>\x20<b>\x20Answer\x204</b><br>",
  "unit-test-b8dab.firebaseapp.com",
  "setAttribute",
  "error",
  "1:834613154548:web:e8e1f032c96d0acf5884a1",
  "834613154548",
  "innerHTML",
  "<br><br>\x20<b>\x20Answer\x202</b><br>",
  "answerListing",
  "AIzaSyBXPucFo6RN4kLBg6Y7nowak4JrkD3QI8o",
  "initializeApp",
  "database",
  "question7a",
  "remove",
  "Answers",
  "<br><br>\x20<b>\x20Answer\x203</b><br>",
  "question5",
  "question6b",
];
(function (u, Q) {
  var j = function (x) {
    while (--x) {
      u["push"](u["shift"]());
    }
  };
  j(++Q);
})(H, 0x116);
var u = function (r, V) {
  r = r - 0x0;
  var Q = H[r];
  return Q;
};
var firebaseConfig = {
  apiKey: u("0x19"),
  authDomain: u("0x11"),
  databaseURL: u("0x25"),
  projectId: u("0x0"),
  storageBucket: u("0x6"),
  messagingSenderId: u("0x15"),
  appId: u("0x14"),
  measurementId: u("0x5"),
};
firebase[u("0x1a")](firebaseConfig);
var answersRef = firebase[u("0x1b")]()["ref"](u("0x1e")),
  ref = firebase[u("0x1b")]()[u("0xf")](u("0x1e"));
ref["on"]("value", gotData, errData);
function gotData(r) {
  var V = document[u("0x22")](".answerListing");
  console["log"](V);
  for (var Q = 0x0; Q < V["length"]; Q++) {
    V[Q][u("0x1d")]();
  }
  var j = r[u("0x2")](),
    x = Object["keys"](j);
  for (var Q = 0x0; Q < x["length"]; Q++) {
    var n = x[Q],
      D = j[n][u("0x24")],
      t = j[n][u("0x1")],
      b = j[n][u("0xc")],
      o = j[n][u("0xb")],
      X = j[n]["question2"],
      J = j[n]["question3"],
      m = j[n][u("0xa")],
      U = j[n][u("0x20")],
      a = j[n][u("0x7")],
      W = j[n][u("0x21")],
      O = j[n][u("0x1c")],
      B = j[n][u("0xe")],
      I = document[u("0x8")]("li");
    (I[u("0x16")] =
      "\x20<b>Name\x20:</b>" +
      D +
      u("0x4") +
      "<b>Roll\x20Number\x20:</b>" +
      t +
      u("0x4") +
      "<b>Subject\x20:</b>" +
      b +
      "<br><br>\x20<b>\x20Answer\x201</b><br>" +
      o +
      u("0x17") +
      X +
      u("0x1f") +
      J +
      u("0x10") +
      m +
      u("0x23") +
      U +
      "<br><br>\x20<b>\x20Answer\x206.a</b><br>" +
      a +
      "<br><br>\x20<b>\x20Answer\x206.b</b><br>" +
      W +
      "<br><br>\x20<b>\x20Answer\x207.a</b><br>" +
      O +
      "<br><br>\x20<b>\x20Answer\x207.b</b><br>" +
      B +
      u("0x26")),
      I[u("0x12")]("class", u("0x18")),
      document["getElementById"](u("0x3"))[u("0xd")](I);
  }
}
function errData(r) {
  console["log"](u("0x13")), console[u("0x9")](r);
}
