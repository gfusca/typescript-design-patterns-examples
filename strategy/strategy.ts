export interface SoldierWeaponStrategy {
    shoot(enemy: BaseEnemy);
}

export class PistolStrategy implements SoldierWeaponStrategy {

    private damage = 10;

    shoot(enemy: BaseEnemy) {
        console.log("doing sounds...pew...pew");
        console.log("appying phisics...");
        console.log("pistol shooted and damage enemy by", this.damage);
        enemy.hurt(this.damage);
    }
}

export class RifleStrategy implements SoldierWeaponStrategy {

    private damage = 15;

    shoot(enemy: BaseEnemy) {
        console.log("doing sounds...pew...pew");
        console.log("appying phisics...");
        console.log("rifle shooted and damage enemy by", this.damage);
        enemy.hurt(this.damage);
    }
}

export class ShotgunStrategy implements SoldierWeaponStrategy {
    private damage = 25;

    shoot(enemy: BaseEnemy) {
        console.log("doing sounds...pew...pew");
        console.log("appying phisics...");
        console.log("shotgun shooted and damage enemy by", this.damage);
        enemy.hurt(this.damage);
    }
}

class PunchStrategy implements SoldierWeaponStrategy {
    private damage = 15;

    shoot(enemy: BaseEnemy) {
        console.log("doing sounds...pew...pew");
        console.log("appying phisics...");
        console.log("punch! damage enemy by 1", this.damage);
        enemy.hurt(this.damage);
    }
}

export class Soldier {

    private weapon: SoldierWeaponStrategy;

    constructor() {
        this.weapon = new PunchStrategy();
    }

    shoot(enemy: BaseEnemy) {
        this.weapon.shoot(enemy);
    }

    changeWeapon(weapon: SoldierWeaponStrategy) {
        this.weapon = weapon;
    }

}

export class BaseEnemy {
    private health: number = 40;

    constructor(health: number) {
        this.health = health;
        console.log("a wild enemy appears. health:", this.health);
    }

    hurt(count: number) {
        this.health -= count;
        if (this.health <= 0)
            console.log("I die X_X");
        else
            console.log("health reaming:", this.health);
    }
}