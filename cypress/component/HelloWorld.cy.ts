/// <reference types="cypress" />
import HelloWorld from "@/components/HelloWorld.vue";

describe("<HelloWorld>", () => {
  it("mounts", () => {
    cy.mount(HelloWorld);
  });
});
