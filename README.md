![vivari](https://i.imgur.com/8FPSh4V.png)
[see it live](https://ashes-ashes.github.io/vivari/)

**vivari** is built by hand, from physics engine to artwork.

## Tools & Technologies

### Languages
 - Vanilla JavaScript
 - HTML5
 - CSS3

### Tools / Plugins
- Webpack
	- `css-loader`
	- `style-loader`
	- `file-loader`
- Babel
- `gh-pages`

### Art Assets
- Procreate

## Current Features
- *Physics.* Objects in the terrarium can be picked up and tossed – they'll collide with the walls and floor, bounce, slide, and come to a stop from friction.
- *Critters.* Motes - hopping points of light - and sluggos, groundbound scooting invertebrates. Both hatch from unique eggs.
- *Plants.* They're grown from seed, and once mature they produce fruits for creatures to eat.


## Future Features
### Gameplay Elements
- *'Gacha' mechanics.* Deeds for seeds. Complete tasks in your real life and be rewarded in-game.
- *Growing up.* Well cared-for motes becoming creatures with more complex behavior.
- *Hazards.* Your little lights are vulnerable to predation.
- *Saving your progress.*

### Internal Improvements.
- *More complex physics.* Currently, physics are calculated with respect to the ground and walls –
```javascript
    applyGravity() {
        if ((this.pos.y + this.size.y) < properties.terrarium.groundHeight) {
            this.onGround = false;
            this.vel = Util.addVectors(this.vel, properties.physics.gravity)
        } else if ((this.pos.y + this.size.y) >= properties.terrarium.groundHeight) {
            this.onGround = true;
            this.pos.y = (properties.terrarium.groundHeight - this.size.y);
            this.vel.y = -(this.vel.y - this.weight);
        }

    }

    applyFriction() {
        if (this.onGround) {
            if (this.vel.x < -properties.physics.groundFriction) {
                this.vel.x += properties.physics.groundFriction;
            } else if (this.vel.x > properties.physics.groundFriction) {
                this.vel.x -= properties.physics.groundFriction;
            } else {
                this.vel.x = 0;
            }
        }
    }

    deflect() {
        if (this.pos.x <= 0 || (this.pos.x + this.size.x) >= properties.terrarium.width) {
            this.vel.x = -(this.vel.x/properties.physics.impact);
            this.pos.x <= 0 ? this.pos.x = 0 : this.pos.x = properties.terrarium.width - this.size.x
        } 
    }
```
Ideally, they would support collisions with other objects as well, for future implementation of plants, hostile creatures and possibly more complex terrain objects.
