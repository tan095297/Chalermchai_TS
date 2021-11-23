2.1;
class EuropeCar {
    constructor(id, brand, color, distanceUsed) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return "Honda Honda Honda";
    }
    use() {
        this.distanceUsed += this.distanceUsed;
        return this.distanceUsed;
    }
}
const euCar1 = new EuropeCar(2, "MG", "RED", 500);
console.log(euCar1.showCar());
console.log(euCar1.use());
