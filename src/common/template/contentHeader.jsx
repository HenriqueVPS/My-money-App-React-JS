import React from 'react'
import Content from './content'

export default props => (
    <section className='content-header'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)