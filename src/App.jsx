import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import Cards from './components/Cards'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)
  const cardData=[{
    money:4000000,
    desc:"Total budget you own"
  },
  {
    money:299762,
    desc:"Spent month to-date"
  },{
    money:2874582,
    desc:"Forecasted till month end"
  }
]

const bucketsData=[
  {
    Name:'ACME Corp',
    Budget:'$ 200,000',
    Spend:'$ 173,762',
    Forecast:'$ 205,049'
  },
  {
    Name:'Raman Inc',
    Budget:'$ 200,000',
    Spend:'$ 124,762',
    Forecast:'$ 292,629'
  }
]

const approvalData=[
  {
    BucketName:"ACME Corp",
    CurrentBudget:"$ 200,000",
    RequestedBudget:"$ 250,000",
    RequestedBy:"Joe Hilfinger"
  }
]

const memberBucketData=[{
  Name:"Longate",
  Budget:"$ 200,000",
  Spend:"$ 173,762",
  Forecast:"$ 205,049"
}]
  return (
    <main className='w-screen flex gap-8'>
      <SideBar />
      <Feed cardData={cardData}/>
    </main>
  )
}

export default App
