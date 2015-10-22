describe("translate", function() {
  it("is true if a word that starts with 'o' ends in 'ay'", function() {
    expect(translate("out")).to.equal('outay');
  });
});
