import './App.css'

// Importing the JSON data for college basketball teams
import teams from './CollegeBasketballTeams.json'

// Heading component to display the title and description of the website
function Heading() {
  return (
  <>
    <h1>Welcome to My March Madness Website!</h1>
    <h2>Here are the NCAA Basketball Teams</h2>
    <p>Explore college basketball teams, their mascots, and where they are located!</p>
  </>
  )
}

// Team component to display individual team information
function Team({
  school,
  name,
  city,
  state,
}: {
  school: string
  name: string
  city: string
  state: string
}) {

  // Rendering the team information in a card format
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  )
}

//  TeamList component to iterate through the teams and render a Team component for each team in the JSON data
function TeamList() {
  return (
    <div className="card-container">
      {teams.teams.map((singleTeam) => (
        <Team key={singleTeam.school} {...singleTeam} />
      ))}
    </div>
  )
}

// Main App component to render the Heading and TeamList components
function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  )
}

// Exporting the App component as the default export of this module
export default App