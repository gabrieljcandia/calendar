/// <reference types="cypress" />

import {dateToIsoString} from "../../utils/date-utils";

const createTask = (title, date, time, color) => {
  cy.get('#add-reminder').click();
  cy.get('#title').type(title);
  cy.get('#date').type(date);
  cy.get('#time').type(time);
  cy.get('#color-picker').click();
  cy.get(`li[data-value="${color}"]`).click();
  cy.get('#save').click();
}

describe('calendar app', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('can add a task', () => {
    cy.fixture("addTask").then(({title, time, color}) => {
      const date = dateToIsoString(new Date());
      createTask(title, date, time, color);
      cy.get('td.sameMonth .task').should('have.text', `${time} ${title}`);
    })
  })

  it('can delete a task', () => {
    cy.fixture("deleteTask").then(({title, time, color}) => {
      const date = dateToIsoString(new Date());
      createTask(title, date, time, color);
      cy.get('td.sameMonth .task').click();
      cy.get('#delete').click();
      cy.get('td.sameMonth .task').should('not.exist');
    })
  })

  it('can edit a task', () => {
    cy.fixture("editTask").then(({firstTitle, newTitle, time, color}) => {
      const date = dateToIsoString(new Date());
      createTask(firstTitle, date, time, color);
      cy.get('td.sameMonth .task').click();
      cy.get('#title').clear().type(newTitle);
      cy.get('#save').click();
      cy.get('td.sameMonth .task').should('have.text', `${time} ${newTitle}`)
    })
  })

})
