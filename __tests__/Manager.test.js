const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('creates a player object', () => {
    const man = new Manager ('Dave');
  
    expect(man.name).toBe('Dave');
    
   
  });