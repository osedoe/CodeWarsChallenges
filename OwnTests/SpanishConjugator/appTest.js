const assert = require("chai").assert;
const app = require("../SpanishConjugator/app");

// Test Verbs
var comer = {
    "comer": [
      "como",
      "comes",
      "come",
      "comemos",
      "coméis",
      "comen"
    ]
  };

  var vivir = {
    "vivir": [
      "vivo",
      "vives",
      "vive",
      "vivimos",
      "vivís",
      "viven"
    ]
  };
  
  var caminar = {
    "caminar": [
      "camino",
      "caminas",
      "camina",
      "caminamos",
      "camináis",
      "caminan"
    ]
  };

describe("App", () => {
    it("Conjugate must work with -ar verbs", () => {
        assert.equal(app.conjugate("caminar", caminar));
    });
    it("Conjugate must work with -er verbs", () => {
        assert.equal(app.conjugate("comer", comer));
    });
    it("Conjugate must work with -ir verbs", () => {
        assert.equal(app.conjugate("vivir", vivir));
    });
});