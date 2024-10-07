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
    this.isOn = true;

    if (this.snacksQty === 0) {
      this.reset();
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
    this.isOn = false;

    this.dropMoney();
    this.dropSnacks();
  }

  private dropMoney() {
    let moneyToDrop = 20;
    if (this.money < 20) {
      moneyToDrop = this.money;
    }
    this.money = this.money - moneyToDrop;
  }

  private dropSnacks() {}
}

const vendorMachine = new VendorMachine();
