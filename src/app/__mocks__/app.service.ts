export const AppService = jest.fn().mockReturnValue({
  getHello: jest.fn().mockReturnValue('Hello World'),
});

export default AppService;
