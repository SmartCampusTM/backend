export const AppService = jest.fn().mockReturnValue({
  sendHeartbeat: jest.fn().mockReturnValue('OK'),
});

export default AppService;
