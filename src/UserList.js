import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function UserList(props) {
  return (
    <div className="row">
                {props.ll.map((val)=>(
                <div className="col-3"  key={val.id}>
                    <p >{val.id} </p>
                    <p ><span >Username : </span>{val.username}</p>
                    <p ><span >Email : </span>{val.email}</p>
                    <p ><span >Phone : </span>{val.phone}</p>
                   
                </div>))}
          </div>
  )
}

export default UserList