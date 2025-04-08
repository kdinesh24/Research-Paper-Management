import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/research-papers')
      .then(res => setPapers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Research Papers</h2>
      <ul>
        {papers.map(paper => (
          <li key={paper._id}>
            {paper.title} - {paper.author} ({paper.year}) 
            {paper.publisher && <> | Publisher: {paper.publisher.name}</>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapers;
