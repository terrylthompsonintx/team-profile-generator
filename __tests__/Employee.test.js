const Employee = require('../lib/Employee');

test('creates a player object', () => {
    const emp = new Employee ('Dave');
  
    expect(emp.name).toBe('Dave');
    
    
  });