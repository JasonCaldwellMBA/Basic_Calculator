console.log("LOADED TEST FILE")

describe("Calculator Test Suite", function() {
  describe("...Clear Display...", function(){
    it("clears the display", function() {
      $("#display").text("9898");
      $("#clear")[0].click();
      expect($("#display").text()).to.equal("")
    })
    it("clears the display after buttons have been clicked", function() {
      $("#9")[0].click()
      $("#8")[0].click()
      $("#9")[0].click()
      $("#8")[0].click()
      expect($("#display").text()).to.equal("9898");
      $("#clear")[0].click();
      expect($("#display").text()).to.equal("");
    })
  })
  describe("...Addition Tests...", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("2 + 2 = 4", function() {
      $("#2")[0].click();
      $("#add")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('4')
    });

    it("58 + 90 = 148", function(){
      $("#5")[0].click();
      $("#8")[0].click();
      $("#add")[0].click();
      $("#9")[0].click();
      $("#0")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('148')
    });

    it("13 + 74 = 87", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#add")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('87')
    });

    it("2.9 + 2.2 = 5.1", function() {
      $("#2")[0].click();
      $("#decimal")[0].click();
      $("#9")[0].click();
      $("#add")[0].click();
      $("#2")[0].click();
      $("#decimal")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('5.1')
    });

    it("0.8 + 9.0 = 9.8", function(){
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#8")[0].click();
      $("#add")[0].click();
      $("#9")[0].click();
      $("#decimal")[0].click();
      $("#0")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('9.8')
    });

    it("0.13 + 0.74 = 0.87", function(){
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#1")[0].click();
      $("#3")[0].click();
      $("#add")[0].click();
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('0.87')
    });
  });

  describe("...Subtraction Tests...", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("1 - 2 = -1", function() {
      $("#1")[0].click();
      $("#subtract")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('-1')
    });

    it("90 - 58 = 32", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#subtract")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('32')
    });

    it("13 - 74 = -61", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#subtract")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('-61')
    });

    // it("1.8 - 2 = -0.2", function() {
    //   $("#1")[0].click();
    //   $("#decimal")[0].click();
    //   $("#8")[0].click();
    //   $("#subtract")[0].click();
    //   $("#2")[0].click();
    //   $("#equals")[0].click();
    //   expect($("#display").text()).to.equal('-0.2')
    // });

    it("90 - 0.58 = 89.42", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#subtract")[0].click();
      $("#decimal")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('89.42')
    });

    it("67.13456789 - 44.10456789 = 33.03", function(){
      $("#6")[0].click();
      $("#7")[0].click();
      $("#decimal")[0].click();
      $("#1")[0].click();
      $("#3")[0].click();
      $("#4")[0].click();
      $("#5")[0].click();
      $("#6")[0].click();
      $("#8")[0].click();
      $("#9")[0].click();
      $("#subtract")[0].click();
      $("#4")[0].click();
      $("#4")[0].click();
      $("#decimal")[0].click();
      $("#1")[0].click();
      $("#0")[0].click();
      $("#4")[0].click();
      $("#5")[0].click();
      $("#6")[0].click();
      $("#8")[0].click();
      $("#9")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('23.03')
    });
  });
  describe("...Multiplication Tests...", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("1 * 2 = 2", function() {
      $("#1")[0].click();
      $("#multiply")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('2')
    });

    it("90 * 58 = 5220", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#multiply")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('5220')
    });

    it("13 * 74 = 962", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#multiply")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('962')
    });

    it("0.4 * 0.4 = 0.16", function() {
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#4")[0].click();
      $("#multiply")[0].click();
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('0.16')
    });

    it("9.02 * 5.8 = 52.316; rounded to 52.32", function(){
      $("#9")[0].click();
      $("#decimal")[0].click();
      $("#0")[0].click();
      $("#2")[0].click();
      $("#multiply")[0].click();
      $("#5")[0].click();
      $("#decimal")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('52.32')
    });

    // it("-4.4 * -3 = 13.2", function(){
    //   $("#negate")[0].click();
    //   $("#4")[0].click();
    //   $("#decimal")[0].click();
    //   $("#4")[0].click();
    //   $("#multiply")[0].click();
    //   $("#negate")[0].click();
    //   $("#3")[0].click();
    //   $("#equals")[0].click();
    //   expect($("#display").text()).to.equal('13.2')
    // });
  });
  describe("...Division Tests...", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("5 ÷ 2 = 2.5", function() {
      $("#5")[0].click();
      $("#divide")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('2.5')
    });

    it("90 ÷ 58 = 1.5517241379310345; rounded to 1.55", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#divide")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('1.55')
    });

    it("13 ÷ 74 = 0.17567567567567569; rounded to 0.18", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#divide")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('0.18')
    });

    it("0.5 ÷ 2 = 0.25", function() {
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#5")[0].click();
      $("#divide")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('0.25')
    });

    it("9.9 ÷ 0 = Infinity; in javascript", function(){
      $("#9")[0].click();
      $("#decimal")[0].click();
      $("#9")[0].click();
      $("#divide")[0].click();
      $("#0")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('Infinity')
    });

    it("13 ÷ 0.00005 = 260000", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#divide")[0].click();
      $("#0")[0].click();
      $("#decimal")[0].click();
      $("#0")[0].click();
      $("#0")[0].click();
      $("#0")[0].click();
      $("#0")[0].click();
      $("#5")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('260000')
    });
  });
});
