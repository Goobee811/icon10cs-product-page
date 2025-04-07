import React from 'react';
import { citations } from '../../data/citations';

interface CitationProps {
  id: string;
  showTooltip?: boolean;
}

export const Citation: React.FC<CitationProps> = ({ id, showTooltip = true }) => {
  const citation = citations[id];
  
  if (!citation) {
    return null;
  }

  return (
    <sup className="citation-link" data-testid={`citation-${id}`}>
      <a 
        href={`#citation-${id}`}
        aria-label={`Citation: ${citation.text}`}
        data-tooltip={showTooltip ? `${citation.text}, ${citation.source}, ${citation.year}` : ''}
      >
        [{id}]
      </a>
    </sup>
  );
};

export default Citation;