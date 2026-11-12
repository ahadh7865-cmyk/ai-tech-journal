// EDIT THIS FILE: site settings and articles. Then run: node build.js
module.exports = {
site: {
  name: 'AI Tech Journal',
  url: 'https://your-domain.com',      // TODO: your real domain (no trailing slash)
  email: 'contact@your-domain.com',    // TODO: your real contact email
  tagline: 'Clear, practical guides to AI and technology.',
  sample: true,                        // TODO: set false after editing articles (hides the review notice)
  gsc: '',                             // Search Console meta verification code (optional)
  adsense: ''                          // e.g. 'ca-pub-XXXXXXXXXXXXXXXX' after AdSense approval
},
cats: {
  'ai-tools': { name: 'AI Tools', desc: 'Reviews and roundups of AI tools you can start using today.' },
  'ai-tutorials': { name: 'AI Tutorials', desc: 'Step-by-step lessons for getting real work done with AI.' },
  'technology-guides': { name: 'Technology Guides', desc: 'Plain-language explainers on how modern technology works.' }
},
articles: [
{ slug: 'best-free-ai-tools-for-beginners-2026', cat: 'ai-tools', date: '2026-11-12',
  title: 'Best Free AI Tools for Beginners in 2026',
  desc: 'A practical starting list of free AI tools for writing, research and design, plus how to pick one and use it safely.',
  body: `<p>Free AI tools are a low-risk way to learn what this technology can and cannot do. Free plans change often, so treat this list as a starting point and check each provider's pricing page before relying on one.</p>
<h2>How to choose a starting tool</h2>
<p>Start with the job, not the tool. Writing help, research, design and note-taking each favor different products. Pick one task from your week, try one tool on it for several days, and judge it by whether it saved time without lowering quality.</p>
<h2>Good places to begin</h2>
<ul><li><strong>General chat assistants:</strong> ChatGPT, Google Gemini, Claude and Microsoft Copilot all offer free access with usage limits. They handle drafting, summarizing and brainstorming.</li>
<li><strong>Writing polish:</strong> Grammarly offers a free tier with grammar and clarity suggestions.</li>
<li><strong>Design:</strong> Canva includes free templates and some AI-assisted features.</li>
<li><strong>Research:</strong> Perplexity answers questions with links to sources you can open and check.</li></ul>
<h2>Use them safely</h2>
<p>Never paste passwords, private client data or confidential documents into a free tool. Verify facts, names and numbers yourself, because AI systems can state wrong information confidently.</p>
<h2>What to do next</h2>
<p>Keep a short note of which prompts worked. After two weeks you will know which tool deserves a permanent place in your routine.</p>` },
{ slug: 'how-to-use-chatgpt-to-improve-productivity', cat: 'ai-tutorials', date: '2026-11-12',
  title: 'How to Use ChatGPT to Improve Productivity',
  desc: 'Five everyday ways to use ChatGPT at work, with a simple prompt formula and the limits you should respect.',
  body: `<p>ChatGPT works best as a fast first-draft partner. You stay in charge of the decisions; it removes the blank page.</p>
<h2>A simple prompt formula</h2>
<p>Good prompts usually state four things: the role you want it to take, the task, the context, and the format of the answer. For example: "Act as an editor. Shorten this email to under 100 words, keep a friendly tone, and give me two subject lines."</p>
<h2>Five practical uses</h2>
<ol><li><strong>Summarize long text.</strong> Paste an article or meeting notes and ask for key points and open questions.</li>
<li><strong>Draft emails.</strong> Give the facts and the tone, then edit the result in your own voice.</li>
<li><strong>Plan your day.</strong> List your tasks and deadlines and ask for a realistic schedule.</li>
<li><strong>Turn notes into checklists.</strong> Messy notes become clear action items.</li>
<li><strong>Learn quickly.</strong> Ask it to explain an unfamiliar topic at beginner level, then ask follow-ups.</li></ol>
<h2>Limits to respect</h2>
<p>It can produce confident mistakes, so check anything important. Avoid sharing sensitive or confidential information, and review your workplace's AI policy first.</p>` },
{ slug: 'best-ai-tools-for-students', cat: 'ai-tools', date: '2026-11-12',
  title: 'Best AI Tools for Students',
  desc: 'AI tools that can help students study, organize and proofread, and how to use them without breaking academic rules.',
  body: `<p>AI can make studying more efficient, but it should support your learning rather than replace it. Always check your school's policy on AI use before submitting any work.</p>
<h2>Tools worth trying</h2>
<ul><li><strong>Chat assistants</strong> such as ChatGPT, Gemini or Claude can explain hard concepts in simpler words and quiz you on a topic.</li>
<li><strong>NotebookLM</strong> from Google lets you upload your own notes and sources and ask questions about them.</li>
<li><strong>Grammarly</strong> helps proofread your own writing.</li>
<li><strong>Quizlet</strong> turns study material into flashcards and practice sets.</li></ul>
<h2>Study habits that work</h2>
<p>Ask the tool to explain, then close it and try to explain the idea back in your own words. Ask for practice questions rather than finished answers. Keep your own notes as the source of truth.</p>
<h2>Stay honest</h2>
<p>Submitting AI-written work as your own can count as misconduct. Use AI for understanding and feedback, cite it when your instructor requires, and verify any fact or reference it gives you.</p>` },
{ slug: 'how-ai-is-changing-digital-marketing', cat: 'technology-guides', date: '2026-11-12',
  title: 'How AI Is Changing Digital Marketing',
  desc: 'Where AI helps marketers today, from ideas to analysis, and the risks of relying on it too much.',
  body: `<p>AI is becoming part of everyday marketing work. The best results come when it speeds up routine tasks while people keep control of strategy and quality.</p>
<h2>Where it helps</h2>
<ul><li><strong>Ideation:</strong> brainstorming angles, headlines and campaign themes.</li>
<li><strong>Variations:</strong> producing several versions of ad copy or subject lines to test.</li>
<li><strong>Research support:</strong> summarizing reports and grouping customer feedback.</li>
<li><strong>Analysis:</strong> explaining data in plain language and spotting patterns worth checking.</li>
<li><strong>Personalization:</strong> adapting messages to different audiences.</li></ul>
<h2>Risks to manage</h2>
<p>Unedited AI text tends to sound generic and may contain errors. Google has said it focuses on whether content is helpful rather than how it was produced, while spammy mass-produced pages remain against its policies. Be transparent where rules require it and protect customer data.</p>
<h2>A balanced approach</h2>
<p>Use AI for first drafts and analysis, then add real experience, original examples and human review before publishing.</p>` },
{ slug: 'beginners-guide-to-artificial-intelligence', cat: 'technology-guides', date: '2026-11-12',
  title: "Beginner's Guide to Artificial Intelligence",
  desc: 'A plain-language introduction to AI, machine learning and generative AI, with their strengths and limits.',
  body: `<p>Artificial intelligence (AI) is the broad field of building computer systems that perform tasks we usually associate with human intelligence, such as recognizing speech, translating language or making recommendations.</p>
<h2>Key terms</h2>
<ul><li><strong>Machine learning:</strong> software that learns patterns from examples instead of following only hand-written rules.</li>
<li><strong>Generative AI:</strong> models that create new text, images, audio or code.</li>
<li><strong>Large language model (LLM):</strong> a generative model trained on large amounts of text to predict and produce language.</li></ul>
<h2>Where you already meet AI</h2>
<p>Spam filters, map routing, photo search, voice assistants and streaming recommendations all use forms of machine learning.</p>
<h2>Strengths and limits</h2>
<p>AI is fast and good at pattern-heavy tasks. It can also be wrong, reflect biases in its training data, and lacks real understanding of the world. Treat its output as a draft to verify.</p>
<h2>How to keep learning</h2>
<p>Experiment with a free assistant on small tasks, read how its makers describe its limits, and build up gradually.</p>` }
]};
