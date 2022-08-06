/// <reference types="cypress" />
import ATextField from "@/components/ATextField.vue";

describe("<ATextField>", () => {
  it("mounts", () => {
    cy.mount(ATextField);
  });
});
