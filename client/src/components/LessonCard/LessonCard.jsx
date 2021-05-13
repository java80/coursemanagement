import React from 'react';

export default function LessonCard(props) {
  const { lessonname, lessonmaterial } = props;
  return (
    <div className="card">
      <h3>{lessonname}</h3>
      <h3>{lessonmaterial}</h3>
      
    </div>
  );
}

