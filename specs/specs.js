describe("Contact",function() {
  describe("fullName", function() {
    it("combines the first and last name", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Alex";
      testContact.lastName = "Dinnel";
      testContact.fullName().should.equal("Alex Dinnel");
    });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {  
    it("combines the street, city, state", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "5287 N ST";
      testAddress.city = "Washougal";
      testAddress.state = "WA";
      testAddress.fullAddress().should.equal("5287 N ST Washougal, WA");
    });
  });
});

describe("PhoneNumber", function() {
  describe("number", function() {
    it("returns into the format that we like", function() {
      var testPhoneNumber = Object.create(PhoneNumber);
      testPhoneNumber.numnum = "(360hhh606-ggg5760";
      testPhoneNumber.number().should.equal("360-606-5760");
    });
  });
});

