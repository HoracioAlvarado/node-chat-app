const expect = require('expect');

const generateMessage = require('./message').generateMessage;

describe('generateMessage', function () {
  it('should generate correct message object', function () {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createAt).toBe('number');
    expect(message).toEqual(expect.objectContaining({
            from: from,
            text: text
          }));
  });
});