/*
 *********************************************
 * iframe pop up
 * Remove comment line 24 if pop up comes up
 *********************************************
 */
const getIframeDocument = () => {
  return cy
    .get("iframe#attentive_creative")
    .its("0.contentDocument")
    .should("exist");
};

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
};

const URL = "/collections/seamless-underwear";
describe("Exit iframe", () => {
  it("exit from iframe if any", () => {
    cy.visit(URL);
    // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

const bottom = [
  "bikini",
  "panties",
  "brief",
  "high-cut",
  "high-waisted",
  "highwaisted",
  "shorts",
  "thong",
];
const top = ["bralette", "top", "tank", "blouse", "dress", "pants"];

/*
    ***********************************
    *  :: Paste Array in pdps ::
    *  Change values here
     _._     _,-'""`-._
    (,-.`._,'(       |\`-/|
        `-.-' \ )-`( , o o)
              `-    \`_`"'-
    open cypress -> npx cypress open
    report ---> npx cypress run --reporter mochawesome
    ************************************
*/

let pdps = [
  "/products/nude-bralette",
  "/products/nude-brief-panties",
  "/products/laurel-green-cotton-bralette",
  "/products/laurel-green-cotton-bikini",
  "/products/peach-bloom-bralette",
  "/products/peach-bloom-highwaisted",
  "/products/peach-bloom-brief",
  "/products/peach-bloom-thong",
  "/products/ocean-depths-bralette",
  "/products/ocean-depths-high-cut",
  "/products/ocean-depths-bikini",
  "/products/ocean-depths-highwaisted",
  "/products/ocean-depths-brief",
  "/products/green-millieu-thong",
  "/products/reptile-stripe-mesh-bralette",
  "/products/reptile-stripe-mesh-brief",
  "/products/reptile-stripe-mesh-thong",
  "/products/black-bralette",
  "/products/black-brief-panties",
  "/products/black-seamless-tank-top",
  "/products/black-cotton-bralette-1",
  "/products/black-cheeky-panties",
  "/products/piki-bralette",
  "/products/piki-high-cut",
  "/products/black-seamless-sheer-bralette",
  "/products/black-mesh-brief-panties",
  "/products/spotted-panther-bralette",
  "/products/spotted-panther-brief",
  "/products/fallen-rock-cotton-bralette",
  "/products/fallen-rock-cotton-brief-panties",
  "/products/exotic-botanical-bralette",
  "/products/exotic-botanical-high-cut",
  "/products/caribbean-sea-mesh-highwaisted-panties",
  "/products/caribbean-sea-mesh-brief-panties",
  "/products/coral-pink-mesh-brief-panties",
  "/products/coral-pink-mesh-thong-panties",
  "/products/lime-punch-mesh-highwaisted",
  "/products/lime-punch-mesh-brief",
  "/products/castle-wall-highwaisted",
  "/products/castle-wall-thong",
  "/products/castle-wall-brief-panties",
  "/products/exotic-botanical-brief",
  "/products/poppy-red-bralette",
  "/products/fallen-rock-brief-panties",
  "/products/fallen-rock-cheeky",
  "/products/spotted-panther-bralette-bodysuit",
  "/products/spotted-panther-highwaisted",
  "/products/blue-iris-bralette",
  "/products/blue-iris-brief",
  "/products/blue-iris-cheeky",
  "/products/blue-iris-highwaisted",
  "/products/ocean-depths-bralette-bodysuit",
  "/products/nude-bikini-panties",
  "/products/nude-cheeky",
  "/products/brick-dust-tank",
  "/products/picnic-rose-bralette",
  "/products/picnic-rose-highwaisted",
  "/products/white-seamless-tank",
  "/products/brief-white-panties",
  "/products/blue-opal-bralette",
  "/products/blue-opal-seamless-tank",
  "/products/blue-opal-cotton-bralette",
  "/products/blue-opal-thong-panties",
  "/products/black-bodysuit",
  "/products/black-cotton-brief-panties",
  "/products/dark-palm-brief",
  "/products/fallen-rock-seamless-tank-top",
  "/products/laurel-green-cotton-brief",
  "/products/nude-high-waisted-panties",
  "/products/nude-thong",
  "/products/grey-seamless-bralette",
  "/products/grey-brief-panties",
  "/products/high-waisted-opal-blue-panties",
  "/products/blue-opal-cotton-brief",
  "/products/blue-opal-cotton-bikini",
  "/products/coral-pink-mesh-high-waisted-panties",
  "/products/hyper-pink-mesh-brief",
  "/products/hyper-pink-mesh-highwaisted",
  "/products/caribbean-sea-mesh-thong-panties",
  "/products/lime-punch-mesh-bralette",
  "/products/fallen-rock-cotton-bikini-panties",
  "/products/fallen-rock-cotton-thong-panties",
  "/products/fallen-rock-high-waisted-panties",
  "/products/fallen-rock-bikini",
  "/products/keepsake-lilac-bralette",
  "/products/keepsake-lilac-high-waisted-panties",
  "/products/keepsake-lilac-bikini-panties",
  "/products/rose-dust-pink-thong-panties",
  "/products/highwaisted-nude-thong",
  "/products/exotic-botanical-bikini-panties",
  "/products/black-cotton-bikini-panties",
  "/products/black-high-waisted-panties",
  "/products/black-bikini-panties",
  "/products/black-thong",
  "/products/black-mesh-thong-panties",
  "/products/black-high-waisted-thong",
  "/products/brush-eco-silk-blouse",
  "/products/brush-washable-eco-silk-slip-dress",
  "/products/brush-eco-silk-pants",
  "/products/ocean-depths-eco-silk-blouse",
  "/products/ocean-depths-eco-silk-shorts",
  "/products/ocean-depths-eco-silk-pants",
  "/products/spotted-panther-eco-silk-slip-dress",
  "/products/spotted-panther-eco-silk-tank-top",
  "/products/spotted-panther-eco-silk-shorts",
  "/products/cactus-eco-silk-slip-dress",
  "/products/cactus-eco-silk-tank-top",
  "/products/cactus-eco-silk-shorts",
  "/products/castle-wall-eco-silk-tank-top",
  "/products/castle-wall-eco-silk-blouse",
  "/products/castle-wall-eco-silk-shorts",
  "/products/piki-highwaisted",
  "/products/piki-brief",
  "/products/lime-punch-eco-silk-scarf",
  "/products/fjord-blue-highwaisted",
  "/products/fjord-blue-thong",
  "/products/provincial-blue-bralette",
  "/products/brief-provincial-blue-panties",
  "/products/white-thong-panties",
  "/products/white-cheeky",
  "/products/grey-bikini-panties",
  "/products/grey-cheeky-panties",
  "/products/grey-high-waisted-panties",
  "/products/grey-thong-panties",
  "/products/laurel-green-bralette",
  "/products/laurel-green-high-waisted-panties",
  "/products/cheeky-laurel-green-underwear",
  "/products/raindrop-thong-panties",
  "/products/sleek-tiger-highwaisted",
  "/products/sleek-tiger-brief",
  "/products/sleek-tiger-bikini",
  "/products/sleek-tiger-thong",
  "/products/espresso-brief",
  "/products/castor-grey-brief",
  "/products/el-sabor-thong",
  "/products/provincial-blue-thong-panties",
  "/products/fallen-rock-thong",
  "/products/high-waisted-white-panties",
  null,
];
const len = pdps.length;
const half = Math.ceil(len / 2);

// ***********************************
// Loop from first half, or last half

// let pdpArr = pdps.slice(0,half)
let pdpArr = pdps.slice(half, len);

const paginationHeight = 667;
const totalHeight = 1; //  *********** max 41

// choose a size from 0 - 7
const iSize = 2;
// ***********************************
// end for changes

describe(`Loop 41 times to get all products`, () => {
  it(`It loops 40 times`, () => {
    let h = 1;
    while (h < totalHeight) {
      cy.wait(1000);
      cy.scrollTo(0, paginationHeight * h);
      expect(h, "to be less than", totalHeight);
      h++;
    }
  });

  it(`:: Get amount of product array from the console :: `, () => {
    let arr = [];
    cy.get(".proFeaturedImage").each(($el, index, list) => {
      const href = Cypress.$($el).attr("href");
      arr.push(href);
      console.clear();
      console.log(
        "%c ---------Copy This Data---------",
        "background: #023535; color: #fff"
      );
      console.log(
        "%c" + JSON.stringify(arr),
        "background: #023535; color: #fff"
      );
      console.log(" /_/ ");
      console.log("( o.o ) ");
      console.log(" > ^ <");
    });
  });
});

const size = {
  0: "XS",
  1: "S",
  2: "M",
  3: "L",
  4: "XL",
  5: "2X",
  6: "3X",
  7: "4X",
};

for (let i = 0; i < pdpArr.length; i++) {
  // for( let i = 0; i < 1; i++){
  describe(`${i}. Start of test for href ${pdpArr[i]}`, () => {
    it(`Visits page ${pdpArr[i]}`, () => {
      cy.visit(pdpArr[i]);
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
      // console.log(JSON.stringify(pdpArr))
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      console.log("---------------------------------");
      console.log(err);
      console.log(runnable);
      console.log("---------------------------------");
      return false;
    });
    it(`.Rebuy ${pdpArr[i]} select size and sends it to cart ${size[iSize]}`, () => {
      const rebuyArr = ".rebuy-product-options";
      const rebuySelect = ".rebuy-title-container";
      const sizeSelect = ".rebuy-select-options .options";
      const rebuyAddCart = ".rebuy-button ";

      let pageColor = "";
      // cy.scrollTo((2%j) * screenWidth, screenSize * 2);
      cy.get(rebuySelect).each((el, index, list) => {
        console.log("---------------rebuy-----");
        console.log(el);
        cy.wrap(el).click({ force: true });
      });
      cy.get(sizeSelect).each((el, index, list) => {
        cy.wrap(el).then((size) => {
          cy.wrap(size).find(".single-select").eq(iSize).click({ force: true });
        });
      });
      cy.get(rebuyAddCart).each((el, index, list) => {
        cy.wrap(el).click();
      });
    });
  });
}
