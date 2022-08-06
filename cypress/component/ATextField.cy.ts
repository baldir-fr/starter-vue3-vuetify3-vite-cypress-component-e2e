/// <reference types="cypress" />
import ATextField from "@/components/ATextField.vue";

describe("<ATextField>", () => {
  it("mounts",  () => {
    cy.mount(ATextField);
    cy.get('[data-cy="a-text-field"]').click()
    cy.get('[data-cy="a-text-field"]').type("Hello")
  });
});
