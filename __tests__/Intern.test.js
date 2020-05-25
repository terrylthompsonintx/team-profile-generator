const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

test('creates a player object', () => {
    const int = new Intern ('Dave');
  
    expect(int.name).toBe('Dave');
    
 
  });