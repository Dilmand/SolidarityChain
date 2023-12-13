import React from 'react'
import {AdContainer} from "../components"
import { useState } from "react";

const Home =() => {
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between'>
        {'<AdContainer title={Anzeigen} isLoading={false} />'}
        </div>
    );

}
export default Home;