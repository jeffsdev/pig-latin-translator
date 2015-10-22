describe("translate", function() {
  it("is true if a word that starts with 'o' ends in 'ay'", function() {
    expect(translate("out")).to.equal('outay');
  });
});

describe("translate", function() {
  it("is true if a word that starts with a consonant has all consonants in beginning removed and has 'ay' added", function() {
    expect(translate("start")).to.equal('artstay');
  });
});
