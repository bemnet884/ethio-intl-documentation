
import React from 'react';
import LiveDemo from './components/LiveDemo';

export const DOC_CONTENT: Record<string, React.ReactNode> = {
  'welcome': (
    <div className="max-w-none">
      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Ethio-Intl
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          A lightweight internationalization toolkit for Ethiopian languages,
          focused on accurate Amharic transliteration and developer-friendly APIs.
        </p>
      </header>

      {/* Demo */}
      <LiveDemo />

      {/* Features */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Core features
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Real-time transliteration',
              desc: 'Convert Latin input to Amharic instantly while typing.',
            },
            {
              title: 'Smart consonant–vowel logic',
              desc: 'Automatic handling of Ethiopian syllabic combinations.',
            },
            {
              title: 'Complete character coverage',
              desc: 'Supports full Amharic consonant sets and vowel forms.',
            },
            {
              title: 'Reusable React components',
              desc: 'Drop-in components designed for modern React apps.',
            },
            {
              title: 'Type-safe API',
              desc: 'Built with TypeScript for better developer experience.',
            },
            {
              title: 'Scalable architecture',
              desc: 'Clean internal structure that’s easy to extend.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 bg-white p-4"
            >
              <h3 className="text-sm font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Project structure
        </h2>

        <pre className="rounded-lg border border-gray-200 bg-gray-900 p-5 text-sm text-gray-100 overflow-x-auto">
          {`src/
├── transliteration/
│   ├── SmartInput.tsx
│   ├── index.ts
├── hooks/
│   └── useTransliterate.ts
├── utils/
│   └── amharicMap.ts
└── localization/`}
        </pre>
      </section>
    </div>
  ),
  'getting-started': (
    <div className="max-w-none">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Getting started
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          This guide walks you through installing Ethio-Intl and using its core
          transliteration features in your application.
        </p>
      </header>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Installation
        </h2>

        <div className="rounded-lg border border-gray-200 bg-gray-900 px-4 py-3">
          <code className="text-sm text-gray-100">
            npm install <span className="text-blue-400">ethio-intl</span>
          </code>
        </div>
      </section>

      {/* Quick start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Quick start
        </h2>

        <p className="mb-4 text-gray-600">
          The <code className="text-gray-900 font-medium">SmartInput</code>{' '}
          component provides an out-of-the-box transliteration experience with
          minimal setup.
        </p>

        <pre className="rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm overflow-x-auto">
          {`import { SmartInput } from 'ethio-intl';

function MyComponent() {
  return (
    <div>
      <SmartInput
        placeholder="Type using Latin characters..."
        onChange={(latinText, amharicText) => {
          console.log('Latin:', latinText);
          console.log('Amharic:', amharicText);
        }}
      />
    </div>
  );
}`}
        </pre>
      </section>

      {/* Note */}
      <section className="max-w-2xl">
        <div className="rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
          <strong className="font-medium text-gray-900">Note:</strong>{' '}
          For best rendering quality, make sure the{' '}
          <code className="font-medium">Noto Sans Ethiopic</code> font is loaded in
          your global styles.
        </div>
      </section>
    </div>
  )
  ,
  'transliteration-guide': (
    <div className="max-w-none">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Transliteration system
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          Ethio-Intl uses a structured consonant–vowel mapping model to convert
          Latin input into accurate Amharic script representations.
        </p>
      </header>

      {/* Input methods */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Input methods
        </h2>

        <p className="mb-6 text-gray-600">
          The first vowel form (ä) is entered using the letter{" "}
          <code className="font-medium text-gray-900">e</code>. This provides a
          simple and consistent typing experience.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">
              Standard input
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Use a consonant followed by <code>e</code> to produce the first form.
            </p>
            <div className="space-y-1 text-sm text-gray-700">
              <div><code>he</code> → <span className="amharic text-lg">ሀ</span></div>
              <div><code>le</code> → <span className="amharic text-lg">ለ</span></div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">
              Extended (double vowel)
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Doubling the vowel produces the fifth form.
            </p>
            <div className="space-y-1 text-sm text-gray-700">
              <div><code>hee</code> → <span className="amharic text-lg">ሄ</span></div>
              <div><code>lee</code> → <span className="amharic text-lg">ሌ</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapping table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          First-form (ä) reference
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Input
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Amharic
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                { key: 'he / h1', char: 'ሀ', ex: 'he → ሀ' },
                { key: 'le / l1', char: 'ለ', ex: 'le → ለ' },
                { key: 'me / m1', char: 'መ', ex: 'me → መ' },
                { key: 're / r1', char: 'ረ', ex: 're → ረ' },
                { key: 'se / s1', char: 'ሰ', ex: 'se → ሰ' },
                { key: 'she / sh1', char: 'ሸ', ex: 'she → ሸ' },
              ].map((row) => (
                <tr key={row.key}>
                  <td className="px-6 py-3 text-sm font-medium text-gray-900">
                    {row.key}
                  </td>
                  <td className="px-6 py-3 text-xl amharic text-gray-900">
                    {row.char}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {row.ex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
  ,
  'examples': (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Examples & Usage Patterns
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Below are practical examples demonstrating how <strong>Ethio-Intl</strong> can be integrated
        into real-world applications, from form handling to live UI previews.
      </p>

      <div className="space-y-14">
        {/* Example 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            1. Form Integration
          </h2>

          <p className="text-gray-600 mb-4">
            Use <code>SmartInput</code> inside forms to capture both Latin input and its
            corresponding Amharic transliteration. This is useful for registration forms,
            profiles, or official records that require bilingual data.
          </p>

          <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl text-sm overflow-x-auto">
            {`const [formData, setFormData] = React.useState({
  name: '',
  nameAmharic: ''
});

<SmartInput
  value={formData.name}
  onChange={(latin, amharic) => {
    setFormData({
      name: latin,
      nameAmharic: amharic
    });
  }}
  placeholder="Enter name in English"
/>`}
          </pre>

          <p className="mt-3 text-sm text-gray-500 italic">
            This pattern ensures you always store both representations while keeping the UI simple for users.
          </p>
        </section>

        {/* Example 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            2. Live Business Card Preview
          </h2>

          <p className="text-gray-600 mb-6">
            Ethio-Intl can power real-time previews for identity cards, profiles, or branding components.
            As users type, Amharic text updates instantly in the UI.
          </p>

          <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl max-w-sm mx-auto text-white amharic">
            <div className="text-3xl font-bold mb-2">ዮናስ ገብረማርያም</div>
            <div className="text-lg opacity-80 mb-4">ሲኒየር ሶፍትዌር መሐንዲስ</div>
            <div className="text-sm opacity-70 leading-relaxed">
              📞 +251 911 123 456<br />
              ✉️ yonas@example.com
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 italic">
            Example of a real-time preview component powered by Ethio-Intl transliteration.
          </p>
        </section>
      </div>
    </div>
  ),
  'contributing': (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Contributing
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        We welcome contributions from the community and appreciate your interest in improving
        <strong> Ethio-Intl</strong>. Every contribution—whether code, documentation, or feedback—
        helps make Ethiopian language support more accessible and reliable for developers worldwide.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Ways to Contribute
      </h2>

      <ul className="space-y-3">
        <li>
          <strong>Bug Reports</strong> — Report bugs or unexpected behavior by opening an issue on GitHub.
          Please include clear reproduction steps and expected behavior.
        </li>
        <li>
          <strong>Feature Requests</strong> — Propose new features, enhancements, or language support
          ideas through GitHub Discussions or Issues.
        </li>
        <li>
          <strong>Documentation Improvements</strong> — Help refine guides, examples, or API references
          to make the project easier to understand.
        </li>
        <li>
          <strong>Code Contributions</strong> — Fix bugs, improve performance, add tests, or implement
          new features aligned with the project roadmap.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Development Setup
      </h2>

      <p className="text-gray-600 mb-4">
        Follow the steps below to set up the project locally for development and testing.
      </p>

      <pre className="bg-gray-100 p-6 rounded-xl text-sm overflow-x-auto">
        {`# Clone the repository
git clone https://github.com/your-org/ethio-intl.git

# Navigate into the project
cd ethio-intl

# Install dependencies
npm install

# Run tests
npm test`}
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-6">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Before submitting a pull request, ensure your changes follow the
          existing code style and that all tests pass successfully.
        </p>
      </div>
    </div>
  ),

};
