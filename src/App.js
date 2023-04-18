const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function App() {
  const renderFrameworks = frontEndFrameworks.map(el => 
  <li index={frontEndFrameworks.indexOf(el)} key={frontEndFrameworks.indexOf(el)}>{el}</li>
); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

export default App
