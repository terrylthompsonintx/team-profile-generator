const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test('creates a player object', () => {
    const eng = new Engineer ('Dave');
  
    expect(eng.name).toBe('Dave');
    

  });