'use client';

import { useState } from 'react';
import { GlossaryEntry } from '@/lib/types';

interface Props {
  text: string;
  glossary: GlossaryEntry[];
}

/**
 * Renders text with [[term]] replaced by hoverable/clickable glossary tooltips.
 */
export function GlossaryText({ text, glossary }: Props) {
  const glossaryMap = new Map(glossary.map((g) => [g.term.toLowerCase(), g.definition]));

  // Split text on [[...]] pattern
  const parts = text.split(/(\[\[[^\]]+\]\])/g);

  return (
    <span>
      {parts.map((part, i) => {
        const match = part.match(/^\[\[([^\]]+)\]\]$/);
        if (match) {
          const term = match[1];
          const definition = glossaryMap.get(term.toLowerCase());
          if (definition) {
            return <GlossaryTerm key={i} term={term} definition={definition} />;
          }
          return <span key={i}>{term}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

function GlossaryTerm({ term, definition }: { term: string; definition: string }) {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        className="text-amber-300 underline decoration-dotted underline-offset-2 font-semibold cursor-help"
        onClick={() => setShow(!show)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        aria-label={`Giải thích: ${term}`}
      >
        {term}
      </button>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-stone-800 text-amber-50 text-xs rounded-lg p-2 shadow-lg z-50 pointer-events-none">
          <strong>{term}:</strong> {definition}
        </span>
      )}
    </span>
  );
}
