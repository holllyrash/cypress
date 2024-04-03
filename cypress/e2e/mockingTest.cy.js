describe("Mocking test",()=>{

    it("Mocking article content",()=>{
        const articles = {
          "articles": [
            {
                "slug": "test6-1864",
                "title": "Alena's test",
                "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
                "tagList": [
                    "Alena's test",
                    "LOL"
                ],
                "createdAt": "2024-04-01T17:23:32.893Z",
                "updatedAt": "2024-04-01T17:23:32.893Z",
                "favorited": true,
                "favoritesCount": 10,
                "author": {
                    "username": "Same 6",
                    "bio": null,
                    "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
                    "following": false
                }
            },
        ],
        articlesCount: 1
      }
            cy.intercept("GET","https://conduit-api.bondaracademy.com/api/articles**",articles)
            cy.visit("https://conduit.bondaracademy.com/login")
            cy.get('[placeholder="Email"]').type("test112345@gmail.com")
            cy.get('[placeholder="Password"]').type("test112345@")
            cy.get('[type="submit"]').click()
            cy.get('h1').should('contain', "Alena's test")
          
      })
    })