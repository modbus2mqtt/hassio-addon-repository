import { ImodbusEntityWithName } from "angular/src/app/services/specificationInterface";
import {
  afterEachEntityHelper,
  beforeEachHelper as beforeEachEntityHelper,
  setOnEntityNameOrVariableFieldsChangeFunc,
} from "./support/entityHelper";

describe("Entity Component tests", () => {
  beforeEach(beforeEachEntityHelper); // mounts entity and opens all expansion panels
  afterEach(afterEachEntityHelper);
  it("Set Variable Type and Entity", () => {
    cy.get('mat-select[formControlName="variableType"]')
      .click()
      .get("mat-option")
      .contains("Unit of Measurement")
      .click()
      .then(() => {
        // Validation will be called after value change of any name or variable field
        // onVariableEntityValueChange or onEntityNameValueChange
        setOnEntityNameOrVariableFieldsChangeFunc((entity) => {
          expect(entity.variableConfiguration).not.to.be.undefined;
          expect(entity.variableConfiguration?.entityId).not.to.be.undefined;
          expect(entity.variableConfiguration?.targetParameter).not.to.be
            .undefined;
          expect((entity as any).name).to.be.undefined;
        });
      });
    cy.get('mat-select[formControlName="variableEntity"]')
      .click()
      .get("mat-option")
      .contains("ent 4")
      .click();
    // This ensures, that EntityValidation was called because OnNameValueChange )
    cy.get('mat-select[formControlName="variableEntity"]').should(
      "not.be.null",
    );
    // append next line to any cy command to debug in chrome
    //  .then(()=>{debugger})
    cy.get('[formcontrolname="name"]').should("be.disabled");
  });
  it("No Variable Type => no variableConfiguration", () => {


    cy.get('mat-select[formControlName="variableType"]')
    .click()
    .get("mat-option")
    .first()
    .click()
    cy.get('input[formControlName="name"]').type("test")
    cy.get('input[formControlName="icon"]').click().then(()=>{setOnEntityNameOrVariableFieldsChangeFunc((entity) => {
        expect(entity.variableConfiguration).to.be.undefined;
        expect((entity as ImodbusEntityWithName).name).to.be.equal('test');
        })})
      cy.get('mat-select[formControlName="variableEntity"]').invoke('val')
      .then(val=>{    
        const myVal = val;      
        expect(myVal).to.equal('');
      })
    
      //cy.get('input[formControlName="name"]').should(
      //  "not.be.null");

      });
});
