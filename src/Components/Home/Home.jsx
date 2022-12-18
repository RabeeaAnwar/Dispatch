import React from 'react'

import { Content } from '../Content/Content'
import { DataProvider } from '../../Context/DataProvider'

export const Home = () => {
  return (
    <>
      <DataProvider>
        <Content />
      </DataProvider>

    </>
  )
}

