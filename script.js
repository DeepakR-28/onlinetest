var H = [
  "push",
  "analytics",
  "preventDefault",
  "addEventListener",
  "question6b",
  "log",
  "unitTest",
  "subject",
  "database",
  "unit-test-b8dab.firebaseapp.com",
  "unit-test-b8dab.appspot.com",
  ".alert",
  "question6a",
  "initializeApp",
  "reset",
  "AIzaSyBXPucFo6RN4kLBg6Y7nowak4JrkD3QI8o",
  "question3",
  "set",
  "rollNumber",
  "value",
  "none",
  "question7a",
  "question5",
  "Answers",
  "getElementById",
  "ref",
  "1:834613154548:web:e8e1f032c96d0acf5884a1",
  "question2",
  "question1",
  "submit",
  "question4",
  "display",
  "question7b",
];
(function (u, Q) {
  var j = function (x) {
    while (--x) {
      u["push"](u["shift"]());
    }
  };
  j(++Q);
})(H, 0x1a3);
var u = function (r, V) {
  r = r - 0x0;
  var Q = H[r];
  return Q;
};
var firebaseConfig = {
  apiKey: u("0x19"),
  authDomain: u("0x13"),
  databaseURL: "https://unit-test-b8dab.firebaseio.com",
  projectId: "unit-test-b8dab",
  storageBucket: u("0x14"),
  messagingSenderId: "834613154548",
  appId: u("0x3"),
  measurementId: "G-10FT1MWQSX",
};
firebase[u("0x17")](firebaseConfig), firebase[u("0xb")]();
var answersRef = firebase[u("0x12")]()[u("0x2")](u("0x0"));
document[u("0x1")](u("0x10"))[u("0xd")](u("0x6"), submitAnswers);
function submitAnswers(r) {
  r[u("0xc")]();
  var V = getInputVal("name"),
    Q = getInputVal(u("0x1c")),
    j = getInputVal(u("0x11")),
    x = getInputVal(u("0x5")),
    n = getInputVal(u("0x4")),
    D = getInputVal(u("0x1a")),
    t = getInputVal(u("0x7")),
    b = getInputVal(u("0x20")),
    o = getInputVal(u("0x16")),
    X = getInputVal(u("0xe")),
    J = getInputVal(u("0x1f")),
    m = getInputVal(u("0x9"));
  console[u("0xf")](V),
    saveAnswer(V, Q, j, x, n, D, t, b, o, X, J, m),
    setTimeout(function () {
      document["querySelector"](u("0x15"))["style"][u("0x8")] = u("0x1e");
    }, 0xbb8),
    document["getElementById"](u("0x10"))[u("0x18")]();
}
function getInputVal(r) {
  return document[u("0x1")](r)[u("0x1d")];
}
function saveAnswer(r, V, Q, j, x, n, D, t, b, o, X, J) {
  var m = answersRef[u("0xa")]();
  m[u("0x1b")]({
    name: r,
    rollNumber: V,
    subject: Q,
    question1: j,
    question2: x,
    question3: n,
    question4: D,
    question5: t,
    question6a: b,
    question6b: o,
    question7a: X,
    question7b: J,
  });
}
