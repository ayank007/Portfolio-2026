import Profile1 from '../components/About/Profile';
import Profile2 from '../components/About/Profile2';

export default function App() {

    return (
        <div className="flex items-center justify-center gap-12 py-32 flex-col">
            <div className="w-[600px] h-[600px] bg-red-500">
                <Profile1 />
            </div>
            <div className="w-[600px] h-[600px] bg-red-500">
                <Profile2 />
            </div>
        </div>
    );
}