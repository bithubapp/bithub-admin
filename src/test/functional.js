import F from 'funcunit';
import mocha from 'steal-mocha';

F.attach(mocha);

describe('bithub-admin functional smoke test', function(){
  beforeEach(function(){
    F.open('../development.html');
  });

  it('bithub-admin main page shows up', function(){
    F('title').text('bithub-admin', 'Title is set');
  });
});

