import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">About Page</h1>
                
                <div className="space-y-6">
                    <h2 className="text-2xl text-gray-800 font-semibold">Button Showcase</h2>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl text-gray-700 font-medium">Different Sizes:</h3>
                        <div className="flex gap-4 flex-wrap">
                            <Button text="Small" onClick={() => {}} size="small" />
                            <Button text="Medium" onClick={() => {}} size="medium" />
                            <Button text="Large" onClick={() => {}} size="large" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl text-gray-700 font-medium">Different Shapes:</h3>
                        <div className="flex gap-4 flex-wrap">
                            <Button text="Rounded Small" onClick={() => {}} shape="rounded-sm" />
                            <Button text="Rounded Medium" onClick={() => {}} shape="rounded-md" />
                            <Button text="Rounded Large" onClick={() => {}} shape="rounded-lg" />
                            <Button text="Rounded Full" onClick={() => {}} shape="rounded-full" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl text-gray-700 font-medium">Different Colors:</h3>
                        <div className="flex gap-4 flex-wrap">
                            <Button text="Primary" onClick={() => {}} color="primary" />
                            <Button text="Secondary" onClick={() => {}} color="secondary" />
                            <Button text="Success" onClick={() => {}} color="success" />
                            <Button text="Danger" onClick={() => {}} color="danger" />
                            <Button text="Warning" onClick={() => {}} color="warning" />
                            <Button text="Gray" onClick={() => {}} color="gray" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;