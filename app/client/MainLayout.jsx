import React from 'react';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
    <header>
      <h1>
        Eaty Me
      </h1>
    </header>

    {content}

    <footer>
      <small>
        
      </small>
    </footer>
  </div>
)
