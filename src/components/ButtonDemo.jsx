import Button from './Button';
import { StarIcon, HeartIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const ButtonDemo = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Button Component Demo</h1>
          <p className="text-lg text-gray-600">Custom button with color #ffc042</p>
        </div>

        {/* Size Variants */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Size Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        {/* Color Variants */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Style Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Primary</h3>
              <Button variant="primary">
                <StarIcon className="w-4 h-4" />
                Primary Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Secondary</h3>
              <Button variant="secondary">
                <HeartIcon className="w-4 h-4" />
                Secondary Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Outline</h3>
              <Button variant="outline">
                <ArrowRightIcon className="w-4 h-4" />
                Outline Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Ghost</h3>
              <Button variant="ghost">
                Ghost Button
              </Button>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-700">Gradient</h3>
              <Button variant="gradient">
                <StarIcon className="w-4 h-4" />
                Gradient Button
              </Button>
            </div>
          </div>
        </div>

        {/* States */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Button States</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Usage Examples</h2>
          <div className="bg-white p-6 rounded-lg border space-y-4">
            <h3 className="font-medium text-gray-700">How to use in your components:</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// Import the Button component
import Button from './Button';
import { StarIcon } from '@heroicons/react/24/solid';

// Basic usage
<Button>Click me</Button>

// With size and variant
<Button size="lg" variant="primary">
  <StarIcon className="w-4 h-4" />
  Get Started
</Button>

// With custom styling
<Button 
  variant="secondary" 
  className="my-custom-class"
  onClick={handleClick}
>
  Custom Button
</Button>`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ButtonDemo; 