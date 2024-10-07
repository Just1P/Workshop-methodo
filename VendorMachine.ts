class VendorMachine {
  private isOn;

  private snacksQty;

  private money;

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  public buySnack() {
    if ((this.isOn = false)) {
      throw new Error("La machine est éteinte");
    }

    this.isOn = true;

    if ((this.snacksQty = 0)) {
      this.reset;
    }

    this.snacksQty -= 1;
    this.money += 2;
  }

  public reset() {
    this.isOn = false;
    this.snacksQty += 50;
    this.money = 0;
    this.isOn = true;
  }

  public shootWithFoot() {
    if ((this.isOn = false)) {
      throw new Error("La machine est éteinte");
    }

    this.isOn = true;

    if (this.snacksQty < 5) {
      throw new Error("Il n'y a malheuresement plus de stock");
    }

    this.snacksQty -= 5;

    if (this.money < 20) {
      throw new Error("bien essayé, mais y'a plus de sous");
    }

    this.money -= 20;
    this.isOn = false;
  }
}

const vendorMachine = new VendorMachine();
