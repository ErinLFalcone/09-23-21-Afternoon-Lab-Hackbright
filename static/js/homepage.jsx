'use strict';

function Homepage() {
  return <div>
    <h1>Welcome to our trading card website!</h1>
    <a href="/cards">Click Here To View The Cards!</a>
    <img src="/static/img/balloonicorn.jpg" />
  </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
