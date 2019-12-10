const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.calcNumberOfDinosaurs = function(){
  let total = 0;

    for (const dinosaur of this.dinosaurs) {
      total += 1;
    }
    return total;
  };

  Park.prototype.removeDinosaur = function(){
    this.dinosaurs.pop();
  };

  Park.prototype.findMostVisitedDinosaur = function(){
    let dinosaur = this.dinosaurs[0]
    let mostVisited = dinosaur.guestsAttractedPerDay;

      for (const dinosaur of this.dinosaurs) {
        if mostVisited >= dinosaur.guestsAttractedPerDay{
        let mostVisited = dinosaur.guestsAttractedPerDay;
      }
      return mostVisited.name;
    };


module.exports = Park;
