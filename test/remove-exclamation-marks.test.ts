import { removeExclamationMarks } from "../src/RemoveExclamationMarks/remove-exclamation-marks";

describe("Remove Exclamation Marks", () => {
    it("should remove all the occurences of '!' in 'Hello World!'", () => {
        expect(removeExclamationMarks("Hello World!")).toEqual("Hello World");
    });
    it("should remove all the occurences of '!' in '¡¡¡Hola Claudia!!! ¿¡Que tal estas!?'", () => {
        expect(removeExclamationMarks("Hola Claudia!!! Que tal estas!?")).toEqual("Hola Claudia Que tal estas?");
    });
});