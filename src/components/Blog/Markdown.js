import React from "react";

// Minimal, dependency-free Markdown renderer for controlled blog content.
// Supports: ## / ### headings, paragraphs, - and 1. lists, > quotes,
// ``` code blocks, and inline **bold**, *italic*, `code`, [text](url).

let keyCounter = 0;
const k = () => `md-${keyCounter++}`;

function parseInline(text) {
  const nodes = [];
  // Order matters: links, then bold, italic, code.
  const regex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
  let last = 0;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[3];
      const external = /^https?:\/\//.test(href);
      nodes.push(
        <a key={k()} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {m[2]}
        </a>
      );
    } else if (m[4]) {
      nodes.push(<strong key={k()}>{m[5]}</strong>);
    } else if (m[6]) {
      nodes.push(<em key={k()}>{m[7]}</em>);
    } else if (m[8]) {
      nodes.push(<code key={k()} className="md-inline-code">{m[9]}</code>);
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function Markdown({ content }) {
  keyCounter = 0; // deterministic keys per render (safe for prerender hydration)
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    let line = lines[i];

    // Code block
    if (line.trim().startsWith("```")) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      i++; // skip closing fence
      blocks.push(<pre key={k()} className="md-pre"><code>{code.join("\n")}</code></pre>);
      continue;
    }

    // Blank line
    if (line.trim() === "") { i++; continue; }

    // Headings
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={k()} className="md-h3">{parseInline(line.slice(4))}</h3>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={k()} className="md-h2">{parseInline(line.slice(3))}</h2>);
      i++; continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quote.push(lines[i].slice(2));
        i++;
      }
      blocks.push(<blockquote key={k()} className="md-quote">{parseInline(quote.join(" "))}</blockquote>);
      continue;
    }

    // Unordered list
    if (/^[-*] /.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      blocks.push(<ul key={k()} className="md-ul">{items.map((it) => <li key={k()}>{parseInline(it)}</li>)}</ul>);
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      blocks.push(<ol key={k()} className="md-ol">{items.map((it) => <li key={k()}>{parseInline(it)}</li>)}</ol>);
      continue;
    }

    // Paragraph (gather consecutive non-blank, non-special lines)
    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("> ") &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i]) &&
      !lines[i].trim().startsWith("```")
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(<p key={k()} className="md-p">{parseInline(para.join(" "))}</p>);
  }

  return <div className="md-body">{blocks}</div>;
}
