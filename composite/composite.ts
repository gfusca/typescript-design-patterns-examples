interface Component {
    doOperation();
}

export class Particle implements Component {
    doOperation() {
        console.log(`Generate particle ${Math.random() * 100} radius`);
    }
}

export class ParticleSystem extends Particle {
    particles: Component[] = [];

    doOperation() {
        this.particles.map((particle) => particle.doOperation());
    }

    add(particle: Particle) {
        this.particles.push(particle)
    }
}