import Button from './Button';
import { 
  SwatchIcon, 
  PaletteIcon, 
  AdjustmentsHorizontalIcon,
  EyeIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const ColorShowcase = () => {
  const colorGroups = [
    {
      name: 'Primary (Golden)',
      description: 'Brand primary color - warm, approachable, food-focused',
      colors: [
        { name: 'primary-50', value: 'var(--primary-50)', lightness: '97%' },
        { name: 'primary-100', value: 'var(--primary-100)', lightness: '94%' },
        { name: 'primary-200', value: 'var(--primary-200)', lightness: '89%' },
        { name: 'primary-300', value: 'var(--primary-300)', lightness: '82%' },
        { name: 'primary-400', value: 'var(--primary-400)', lightness: '75%' },
        { name: 'primary-500', value: 'var(--primary-500)', lightness: '68%' },
        { name: 'primary-600', value: 'var(--primary-600)', lightness: '61%' },
        { name: 'primary-700', value: 'var(--primary-700)', lightness: '54%' },
        { name: 'primary-800', value: 'var(--primary-800)', lightness: '47%' },
        { name: 'primary-900', value: 'var(--primary-900)', lightness: '40%' }
      ]
    },
    {
      name: 'Secondary (Green)',
      description: 'Nature, sustainability, growth',
      colors: [
        { name: 'secondary-50', value: 'var(--secondary-50)', lightness: '96%' },
        { name: 'secondary-100', value: 'var(--secondary-100)', lightness: '92%' },
        { name: 'secondary-200', value: 'var(--secondary-200)', lightness: '86%' },
        { name: 'secondary-300', value: 'var(--secondary-300)', lightness: '78%' },
        { name: 'secondary-400', value: 'var(--secondary-400)', lightness: '70%' },
        { name: 'secondary-500', value: 'var(--secondary-500)', lightness: '62%' },
        { name: 'secondary-600', value: 'var(--secondary-600)', lightness: '54%' },
        { name: 'secondary-700', value: 'var(--secondary-700)', lightness: '46%' },
        { name: 'secondary-800', value: 'var(--secondary-800)', lightness: '38%' },
        { name: 'secondary-900', value: 'var(--secondary-900)', lightness: '30%' }
      ]
    },
    {
      name: 'Accent (Orange)',
      description: 'Energy, warmth, call-to-action',
      colors: [
        { name: 'accent-50', value: 'var(--accent-50)', lightness: '96%' },
        { name: 'accent-100', value: 'var(--accent-100)', lightness: '92%' },
        { name: 'accent-200', value: 'var(--accent-200)', lightness: '86%' },
        { name: 'accent-300', value: 'var(--accent-300)', lightness: '78%' },
        { name: 'accent-400', value: 'var(--accent-400)', lightness: '70%' },
        { name: 'accent-500', value: 'var(--accent-500)', lightness: '62%' },
        { name: 'accent-600', value: 'var(--accent-600)', lightness: '54%' },
        { name: 'accent-700', value: 'var(--accent-700)', lightness: '46%' },
        { name: 'accent-800', value: 'var(--accent-800)', lightness: '38%' },
        { name: 'accent-900', value: 'var(--accent-900)', lightness: '30%' }
      ]
    },
    {
      name: 'Neutral (Grays)',
      description: 'Text, backgrounds, borders',
      colors: [
        { name: 'neutral-0', value: 'var(--neutral-0)', lightness: '100%' },
        { name: 'neutral-50', value: 'var(--neutral-50)', lightness: '98%' },
        { name: 'neutral-100', value: 'var(--neutral-100)', lightness: '96%' },
        { name: 'neutral-200', value: 'var(--neutral-200)', lightness: '92%' },
        { name: 'neutral-300', value: 'var(--neutral-300)', lightness: '86%' },
        { name: 'neutral-400', value: 'var(--neutral-400)', lightness: '74%' },
        { name: 'neutral-500', value: 'var(--neutral-500)', lightness: '62%' },
        { name: 'neutral-600', value: 'var(--neutral-600)', lightness: '50%' },
        { name: 'neutral-700', value: 'var(--neutral-700)', lightness: '38%' },
        { name: 'neutral-800', value: 'var(--neutral-800)', lightness: '26%' },
        { name: 'neutral-900', value: 'var(--neutral-900)', lightness: '16%' },
        { name: 'neutral-950', value: 'var(--neutral-950)', lightness: '10%' }
      ]
    }
  ];

  const semanticColors = [
    { name: 'Success', colors: ['var(--success-50)', 'var(--success-400)', 'var(--success-500)', 'var(--success-600)'] },
    { name: 'Warning', colors: ['var(--warning-50)', 'var(--warning-400)', 'var(--warning-500)', 'var(--warning-600)'] },
    { name: 'Error', colors: ['var(--error-50)', 'var(--error-400)', 'var(--error-500)', 'var(--error-600)'] },
    { name: 'Info', colors: ['var(--info-50)', 'var(--info-400)', 'var(--info-500)', 'var(--info-600)'] }
  ];

  const gradients = [
    { name: 'Primary', css: 'var(--gradient-primary)', description: 'Brand primary gradient' },
    { name: 'Secondary', css: 'var(--gradient-secondary)', description: 'Nature/green gradient' },
    { name: 'Accent', css: 'var(--gradient-accent)', description: 'Energy/orange gradient' },
    { name: 'Warm', css: 'var(--gradient-warm)', description: 'Golden to orange' },
    { name: 'Cool', css: 'var(--gradient-cool)', description: 'Green to blue' },
    { name: 'Sunset', css: 'var(--gradient-sunset)', description: 'Multi-color warm gradient' }
  ];

  return (
    <div className="min-h-screen bg-[color:var(--neutral-50)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[color:var(--primary-100)] text-[color:var(--primary-800)] text-sm font-medium mb-4">
            <PaletteIcon className="w-4 h-4 mr-2" />
            OKLCH Color System
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--neutral-900)] mb-6">
            Professional Color System
          </h1>
          <p className="text-xl text-[color:var(--neutral-600)] max-w-3xl mx-auto leading-relaxed">
            Built with OKLCH for perceptual uniformity, better accessibility, and predictable color relationships.
          </p>
        </div>

        {/* OKLCH Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8 text-center">Why OKLCH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[color:var(--neutral-0)] p-6 rounded-xl border border-[color:var(--neutral-200)] hover-lift">
              <EyeIcon className="w-8 h-8 text-[color:var(--primary-600)] mb-4" />
              <h3 className="text-lg font-semibold text-[color:var(--neutral-900)] mb-2">Perceptually Uniform</h3>
              <p className="text-[color:var(--neutral-600)]">Equal changes in values result in equal perceived changes in color.</p>
            </div>
            <div className="bg-[color:var(--neutral-0)] p-6 rounded-xl border border-[color:var(--neutral-200)] hover-lift">
              <AdjustmentsHorizontalIcon className="w-8 h-8 text-[color:var(--secondary-600)] mb-4" />
              <h3 className="text-lg font-semibold text-[color:var(--neutral-900)] mb-2">Better Accessibility</h3>
              <p className="text-[color:var(--neutral-600)]">Easier to maintain consistent contrast ratios across the palette.</p>
            </div>
            <div className="bg-[color:var(--neutral-0)] p-6 rounded-xl border border-[color:var(--neutral-200)] hover-lift">
              <SparklesIcon className="w-8 h-8 text-[color:var(--accent-600)] mb-4" />
              <h3 className="text-lg font-semibold text-[color:var(--neutral-900)] mb-2">Predictable</h3>
              <p className="text-[color:var(--neutral-600)]">More predictable color relationships and easier palette generation.</p>
            </div>
          </div>
        </div>

        {/* Main Color Palettes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8 text-center">Color Palettes</h2>
          <div className="space-y-12">
            {colorGroups.map((group) => (
              <div key={group.name} className="bg-[color:var(--neutral-0)] rounded-2xl p-8 border border-[color:var(--neutral-200)]">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-[color:var(--neutral-900)] mb-2">{group.name}</h3>
                  <p className="text-[color:var(--neutral-600)]">{group.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
                  {group.colors.map((color) => (
                    <div key={color.name} className="text-center group">
                      <div 
                        className="w-full h-16 rounded-lg border border-[color:var(--neutral-300)] mb-2 transition-oklch group-hover:scale-105 shadow-sm"
                        style={{ backgroundColor: `color(${color.value})` }}
                      ></div>
                      <div className="text-xs font-medium text-[color:var(--neutral-700)] mb-1">
                        {color.name.split('-')[1]}
                      </div>
                      <div className="text-xs text-[color:var(--neutral-500)]">
                        L: {color.lightness}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8 text-center">Semantic Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {semanticColors.map((semantic) => (
              <div key={semantic.name} className="bg-[color:var(--neutral-0)] rounded-xl p-6 border border-[color:var(--neutral-200)]">
                <h3 className="text-lg font-semibold text-[color:var(--neutral-900)] mb-4">{semantic.name}</h3>
                <div className="flex space-x-2">
                  {semantic.colors.map((color, index) => (
                    <div 
                      key={index}
                      className="flex-1 h-12 rounded-lg border border-[color:var(--neutral-300)]"
                      style={{ backgroundColor: `color(${color})` }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8 text-center">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gradients.map((gradient) => (
              <div key={gradient.name} className="bg-[color:var(--neutral-0)] rounded-xl overflow-hidden border border-[color:var(--neutral-200)] hover-lift">
                <div 
                  className="h-24 w-full"
                  style={{ background: gradient.css }}
                ></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[color:var(--neutral-900)] mb-1">{gradient.name}</h3>
                  <p className="text-sm text-[color:var(--neutral-600)]">{gradient.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8 text-center">Button Variants</h2>
          <div className="bg-[color:var(--neutral-0)] rounded-2xl p-8 border border-[color:var(--neutral-200)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--neutral-700)]">Primary</h3>
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" size="sm">Small Primary</Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--neutral-700)]">Secondary</h3>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" size="sm">Small Secondary</Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--neutral-700)]">Outline</h3>
                <Button variant="outline">Outline Button</Button>
                <Button variant="outline" size="sm">Small Outline</Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-[color:var(--neutral-700)]">Semantic</h3>
                <Button variant="success" size="sm">Success</Button>
                <Button variant="warning" size="sm">Warning</Button>
                <Button variant="error" size="sm">Error</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[color:var(--neutral-900)] mb-8">Implementation</h2>
          <div className="bg-[color:var(--neutral-900)] rounded-xl p-6 text-left overflow-x-auto">
            <pre className="text-[color:var(--neutral-200)] text-sm">
{`/* Using OKLCH colors in your CSS */
.my-element {
  background-color: var(--primary-400);
  color: var(--neutral-900);
  border: 1px solid var(--neutral-300);
}

/* In Tailwind with arbitrary values */
<div className="bg-[color:var(--primary-400)] text-[color:var(--neutral-900)]">
  Content with OKLCH colors
</div>

/* Using utility classes */
<div className="bg-primary text-primary-dark border-primary">
  Content with utility classes
</div>`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ColorShowcase; 