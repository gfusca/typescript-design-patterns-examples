import {BaseEnemy, PistolStrategy, Soldier} from "./strategy";

let soldier = new Soldier();
let enemy = new BaseEnemy(40);
soldier.shoot(enemy);

soldier.changeWeapon(new PistolStrategy());
soldier.shoot(enemy);