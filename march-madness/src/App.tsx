import './App.css'
import teams from './CollegeBasketballTeams.json'

function Heading() {
  return (
  <>
    <h1>Welcome to My March Madness Website!</h1>
    <h2>Here are the NCAA Basketball Teams</h2>
    <p>Explore college basketball teams, their mascots, and where they are located!</p>
  </>
  )
}

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
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {name}</p>
      <p>Location: {city}, {state}</p>
    </div>
  )
}

function TeamList() {
  return (
    <div className="card-container">
      {teams.teams.map((singleTeam) => (
        <Team key={singleTeam.school} {...singleTeam} />
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  )
}

export default App