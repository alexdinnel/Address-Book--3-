var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress:function() {
    return this.street + " " + this.city + ", " + this.state;
  }
};

var PhoneNumber = {
  number:function() {
  var alex = this.numnum.replace(/\D/g, "");
    return alex.slice(0,3) + "-" + alex.slice(3,6) + "-" + alex.slice(6); 
  }
};



$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append( '<div class="new-address">' +
                  '<div class="form-group">' +
                    '<label for="new-street">Street</label>' +
                    '<input type="text" class="form-control new-street">' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<label for="new-city">City</label>' +
                    '<input type="text" class="form-control new-city">' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<label for="new-state">State</label>' +
                    '<input type="text" class="form-control new-state">' +
                  '</div>' +
               '</div>') 
  });

  $("#add-phone-number").click(function() {
    $("#new-phone-number").append( '<div id="new-phone-number">' +
              '<div class="new-number">' +
                '<div class="form-group">' +
                  '<label for="new-number">Phone Number</label>' +
                  '<input type="text" class="form-control new-number">' +
                '</div>' +
              '</div>' +
            '</div>')
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    
    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    
    newContact.addresses = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);   
    });

    newContact.phoneNumbers = [];

    $(".new-number").each(function() {
      var inputtedPhoneNumber = $(this).find("input.new-number").val();
      var newPhoneNumber = Object.create(PhoneNumber);
      newPhoneNumber.numnum = inputtedPhoneNumber;

      newContact.phoneNumbers.push(newPhoneNumber);
    });

    $("ul#contacts").append("<li>"+newContact.fullName()+"</li>");

    $("li").click(function() {
      $(".first-name").text(inputtedFirstName);
      $(".last-name").text(inputtedLastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

      $("ul#phoneNumbers").text("");
      newContact.phoneNumbers.forEach(function(foo) {
        $("ul#phoneNumbers").append("<li>" + foo.number() + "</li>");
      });
    });
  });
});

