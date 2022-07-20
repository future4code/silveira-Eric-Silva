import { performAttack, validateCharacter } from "../src";
import { Character } from "../src/model/character";

describe("Unitary validateCharacter test", () => {
  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });
  test("Should return false for defense negative", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 300,
      defense: -300,
    });

    expect(result).toBe(false);
  });
  test("Should return true for true information", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 300,
      defense: 300,
    });

    expect(result).toBe(true);
  });
});

describe("Unitary Fight Perform", () => {
  test("Perform Attack", () => {
    const validationMock = jest.fn(() => {
      return true;
    });
    const attacker: Character = {
      name: "Charizard",
      life: 1500,
      strength: 350,
      defense: 300,
    };
    const defender: Character = {
      name: "Mewtho",
      life: 1200,
      strength: 400,
      defense: 350,
    };
    performAttack(attacker, defender, validationMock as any);

    expect(defender.life).toEqual(1200);
    expect(validationMock).toHaveBeenCalled();
    expect(validationMock).toHaveBeenCalledTimes(2);
    expect(validationMock).toHaveReturnedTimes(2);
  });
  test("Invalid Attacker", () => {
    expect.assertions(4)
    const validationMock = jest.fn(() => {
      return false;
    });
    const attacker: Character = {
      name: "Charizard",
      life: 1500,
      strength: 350,
      defense: 300,
    };
    const defender: Character = {
      name: "Mewtho",
      life: 1200,
      strength: 400,
      defense: 350,
    };
    try {
      performAttack(attacker, defender, validationMock as any);
    } catch (error:any) {
      expect(error.message).toBe("Invalid fields");
      expect(validationMock).toHaveBeenCalled();
      expect(validationMock).toHaveBeenCalledTimes(1);
      expect(validationMock).toHaveReturnedTimes(1);
    }
  });
});
