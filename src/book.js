import React from 'react'

const Book= (props) =>
{
  const { img,name,id,college}=props.bok;
  // attribute,eventhandlaer
  // onclick on mouse hover
  const clickHandler=() =>
  {
    alert('hello world');
  };
  const complexexample =(name) =>{
    console.log(name);

  };
  return <article className='book'> 
    <img src={img} alt={name} />
    <h3 onClick={() => console.log(name)}>{name}</h3>
    <h1>{id}</h1>
    <h2>{college}</h2>
    <button type="button" onClick={clickHandler}>refernce example</button>
    <button type="button" onClick={() => complexexample(name)}></button>
  </article>
}

export default Book
