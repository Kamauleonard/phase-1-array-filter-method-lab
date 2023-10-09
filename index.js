function findMatching(drivers, name) {
    //New array with drivers that match the name
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
 
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  
  console.log(findMatching(drivers, 'Bobby')); 
  console.log(findMatching(drivers, 'Sammy'));
  
  // fuzzyMatch function
function fuzzyMatch(drivers, letters) {
    // New array with drivers whose names start with the provided letters
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // matchName function
  function matchName(drivers, name) {
    // New array with drivers whose name matches the provided name
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  

  
  // fuzzyMatch
  describe('fuzzyMatch()', function () {
    const drivers = [];
  
    beforeEach(function () {
      drivers.length = 0;
      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });
  
    it('returns a driver if beginning provided letters match', function () {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    });
  
    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });
  
    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
  });
  
  // matchName
  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];
  
      expect(matchName(drivers, 'Bobby')).to.eql([
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ]);
    });
  });
  