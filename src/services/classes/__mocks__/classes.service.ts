export const ClassesService = jest.fn().mockReturnValue({
    createClass: jest.fn().mockReturnValue('OK'),
    classes: jest.fn().mockReturnValue('OK'),
    findClass: jest.fn().mockReturnValue('OK'),
    updateClass: jest.fn().mockReturnValue('OK'),
    deleteClass: jest.fn().mockReturnValue('OK'),
  });
  