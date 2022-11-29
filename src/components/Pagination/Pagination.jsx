import  Button  from 'components/Button';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Pagination() {
    const contacts = useSelector(state => state.contacts.contacts.items);


  return (
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
  {contacts.map((item,i) => <Button key={item.name} name={i+=1}/>)}
     { <button type="button" class="btn btn-primary active">1</button> }
    {/* <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button> */} 
  </div></div>
    
  )
}
