import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ActivatedRoute, provideRouter } from "@angular/router";

import { ISpecificationMethods } from "angular/src/app/services/specificationInterface";
import { ModbusErrorComponent } from "angular/src/app/modbus-error/modbus-error.component";
import {
  Iconfiguration,
  ImodbusErrorsForSlave,
} from "@modbus2mqtt/server.shared";

let modbusErrors: ImodbusErrorsForSlave = {
  errors: [{ entityId: 1, message: "One Error" }],
  totalErrorCount: 1,
  errorsSinceLastSuccessful: 0,
  allEntitiesFailed: false,
  notIdentifiedEntities: [],
  lastErrorTime: new Date(2021, 1, 1, 7, 7, 7).getTime(),
  lastAllEntitiesFailedTime: 0,
  lastSuccessfulIdentifiedTime: 0,
  lastAllEntitiesFailedSinceLastSuccessful: 0,
  lastIdentifiedSinceLastSuccessful: 0,
};

describe("Modbus Error Component tests", () => {
  beforeEach(() => {
    // This configures the rootUrl for /api... calls
    // they need to be relative in ingress scenarios,
    // but they must be absolute for cypress tests
    cy.window().then((win) => {
      (win as any).configuration = { rootUrl: "/" };
    });
    cy.mount(ModbusErrorComponent, {
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([]),
      ],
      componentProperties: {
        modbusErrors: modbusErrors,
      },
    });
  });
  it("can mount", () => {});
  it("first icon is red", () => {
    cy.get("div.icon-text mat-icon").should("satisfy", ($el) => {
      const classList = Array.from($el[0].classList);
      return classList.includes("red"); // passes
    });
  });
  it("third icon is green", () => {
    cy.get("div.icon-text mat-icon").should("satisfy", ($el) => {
      const classList = Array.from($el[2].classList);
      return classList.includes("green"); // passes
    });
  });
});
