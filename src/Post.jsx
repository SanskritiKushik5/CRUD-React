import React from 'react';
import Card from "./Cards";
export default function SimpleCard({posts}) {
  
  return (
    <div style={{justifyContent: "center", alignItems: "center", marginLeft: "auto"}}>
    {posts.map((post) => (
      <Card post={post}/>
     ))}
     </div>
  );
}
