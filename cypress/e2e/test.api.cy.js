describe("test api user", () => {
  it("should create,get and delete user", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      body: [
        {
          id: 100,
          username: "mig",
          email: "otvet@otvet.ru",
          password: "123456778",
          phone: "123456789",
          userStatus: 0,
        },
      ],
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should check user by username ", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/mig",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should update user data", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/mig",
      body: {
        id: 100,
        username: "mig",
        email: "otvet@otvet.ru",
        password: "123456778",
        phone: "1111111111",
        userStatus: 0,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should check user by username after updating user data", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/mig",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it("Should delete user by username", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/mig",
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(200);
    });
  });
});
