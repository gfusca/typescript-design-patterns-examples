import {Particle, ParticleSystem} from "./composite";
let particleSystem = new ParticleSystem;

for (let i = 0; i < 15; ++i)
    particleSystem.add(new Particle());

particleSystem.doOperation();