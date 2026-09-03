import Section1 from './components/section1/Section1'


function App() {
  const users = [
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, reiciendis.",
      review:"Satisfied",
      color:"blue"
    },
    {
      img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, reiciendis.",
      review:"Looking",
      color:"lightgreen"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, reiciendis.",
      review:"Working",
      color:"orange"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, reiciendis.",
      review:"Not Satisfied",
      color:"green"
    },
    {
      img:"https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, reiciendis.",
      review:"Pending",
      color:"red"
    },
    
  ]

  return (
    <>
      <div className=''>

      <Section1 users = {users}/>
      </div>
      
    </>
  )
}

export default App
