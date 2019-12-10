const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
let park;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('megladon', 'carnivore', 40);
    dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 20);
    dinosaur3 = new Dinosaur('diplodocus', 'herbivore', 30);
    park1 = new Park("Dino Park", 45, [dinosaur1, dinosaur2]);
  });

  it('should have a name', function(){
    const expected = 'Dino Park';
    assert.strictEqual(park1.name, expected);
  });

  it('should have a ticket price', function(){
    const expected = 45;
    assert.strictEqual(park1.ticketPrice, expected);
  });

  it('should have a collection of dinosaurs', function(){
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    const expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(park1.dinosaurs, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDinosaur(dinosaur3);
    const expected = 1;
    assert.strictEqual(park1.calcNumberOfDinosaurs(), expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur2);
    park1.removeDinosaur(dinosaur2);
    const expected = 1;
    assert.strictEqual(park1.calcNumberOfDinosaurs(), expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park1.addDinosaur(dinosaur3);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur1);
    const expected = "megladon";
    assert.strictEqual(park1.findMostVisitedDinosaur(), expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
