import React from 'react'
import Reviews from './components/Reviews'

function App() {
  return (
    <main>
      <div className="container">
        <section className="title">
          <h2>User reviews</h2>
          <div className="underline"></div>
        </section>
        <Reviews />
      </div>
    </main>
  );
}

export default App;
